import type { APIRoute } from "astro";
import { getSecret } from "astro:env/server";
import nodemailer from "nodemailer";

export const prerender = false;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const redirectResponse = (request: Request, result: "success" | "error") => {
  const url = new URL("/", request.url);
  url.searchParams.set("contact", result);
  url.hash = "Contact";
  return Response.redirect(url, 303);
};

const respond = (request: Request, status: number, message: string) => {
  const wantsJson = request.headers.get("accept")?.includes("application/json");
  if (wantsJson) {
    return Response.json(
      { ok: status < 400, message },
      { status, headers: { "Cache-Control": "no-store" } },
    );
  }
  return redirectResponse(request, status < 400 ? "success" : "error");
};

export const POST: APIRoute = async ({ request }) => {
  const requestOrigin = request.headers.get("origin");
  if (requestOrigin) {
    try {
      if (new URL(requestOrigin).host !== new URL(request.url).host) {
        return respond(request, 403, "Invalid origin");
      }
    } catch {
      return respond(request, 403, "Invalid origin");
    }
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 24_000) return respond(request, 413, "Request too large");

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return respond(request, 400, "Invalid form data");
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const website = String(formData.get("website") ?? "").trim();

  if (website) return respond(request, 200, "Message accepted");

  if (!name || name.length > 80 || !emailPattern.test(email) || email.length > 160) {
    return respond(request, 400, "Invalid contact details");
  }
  if (!message || message.length > 4000) return respond(request, 400, "Invalid message");

  const smtpUser = getSecret("SMTP_USER");
  const smtpPassword = getSecret("SMTP_PASSWORD");
  const contactTo = getSecret("CONTACT_TO") ?? smtpUser;
  const smtpHost = getSecret("SMTP_HOST") ?? "smtp.gmail.com";
  const smtpPort = Number(getSecret("SMTP_PORT") ?? 587);
  const secureSetting = getSecret("SMTP_SECURE");
  const smtpSecure = secureSetting ? secureSetting === "true" : smtpPort === 465;

  if (!smtpUser || !smtpPassword || !contactTo || !Number.isFinite(smtpPort)) {
    return respond(request, 503, "Contact service is not configured");
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: { user: smtpUser, pass: smtpPassword },
  });

  try {
    await transporter.sendMail({
      from: `Portfolio NotExer <${smtpUser}>`,
      to: contactTo,
      replyTo: email,
      subject: "Nuevo mensaje desde el formulario",
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });
    return respond(request, 200, "Message sent");
  } catch (error) {
    console.error(
      "Contact mail delivery failed",
      error instanceof Error ? error.message : "Unknown error",
    );
    return respond(request, 502, "Message delivery failed");
  }
};
