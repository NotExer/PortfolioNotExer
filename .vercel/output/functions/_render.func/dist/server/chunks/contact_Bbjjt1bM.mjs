import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { r as setOnSetGetEnv, t as getEnv$1 } from "./runtime_x1Na2qzi.mjs";
import nodemailer from "nodemailer";
//#region \0astro:env/server
/** @returns {string} */
var getEnv = (key) => {
	return getEnv$1(key);
};
var getSecret = (key) => {
	return getEnv(key);
};
setOnSetGetEnv(() => {});
//#endregion
//#region src/pages/api/contact.ts
var contact_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var redirectResponse = (request, result) => {
	const url = new URL("/", request.url);
	url.searchParams.set("contact", result);
	url.hash = "Contact";
	return Response.redirect(url, 303);
};
var respond = (request, status, message) => {
	if (request.headers.get("accept")?.includes("application/json")) return Response.json({
		ok: status < 400,
		message
	}, {
		status,
		headers: { "Cache-Control": "no-store" }
	});
	return redirectResponse(request, status < 400 ? "success" : "error");
};
var POST = async ({ request }) => {
	const requestOrigin = request.headers.get("origin");
	if (requestOrigin) try {
		if (new URL(requestOrigin).host !== new URL(request.url).host) return respond(request, 403, "Invalid origin");
	} catch {
		return respond(request, 403, "Invalid origin");
	}
	if (Number(request.headers.get("content-length") ?? 0) > 24e3) return respond(request, 413, "Request too large");
	let formData;
	try {
		formData = await request.formData();
	} catch {
		return respond(request, 400, "Invalid form data");
	}
	const name = String(formData.get("name") ?? "").trim();
	const email = String(formData.get("email") ?? "").trim();
	const message = String(formData.get("message") ?? "").trim();
	if (String(formData.get("website") ?? "").trim()) return respond(request, 200, "Message accepted");
	if (!name || name.length > 80 || !emailPattern.test(email) || email.length > 160) return respond(request, 400, "Invalid contact details");
	if (!message || message.length > 4e3) return respond(request, 400, "Invalid message");
	const smtpUser = getSecret("SMTP_USER");
	const smtpPassword = getSecret("SMTP_PASSWORD");
	const contactTo = getSecret("CONTACT_TO") ?? smtpUser;
	const smtpHost = getSecret("SMTP_HOST") ?? "smtp.gmail.com";
	const smtpPort = Number(getSecret("SMTP_PORT") ?? 587);
	const secureSetting = getSecret("SMTP_SECURE");
	const smtpSecure = secureSetting ? secureSetting === "true" : smtpPort === 465;
	if (!smtpUser || !smtpPassword || !contactTo || !Number.isFinite(smtpPort)) return respond(request, 503, "Contact service is not configured");
	const transporter = nodemailer.createTransport({
		host: smtpHost,
		port: smtpPort,
		secure: smtpSecure,
		auth: {
			user: smtpUser,
			pass: smtpPassword
		}
	});
	try {
		await transporter.sendMail({
			from: `Portfolio NotExer <${smtpUser}>`,
			to: contactTo,
			replyTo: email,
			subject: "Nuevo mensaje desde el formulario",
			text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
		});
		return respond(request, 200, "Message sent");
	} catch (error) {
		console.error("Contact mail delivery failed", error instanceof Error ? error.message : "Unknown error");
		return respond(request, 502, "Message delivery failed");
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/contact@_@ts
var page = () => contact_exports;
//#endregion
export { page };
