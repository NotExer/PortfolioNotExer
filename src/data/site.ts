import type { ImageMetadata } from "astro";

import aws from "../assets/images/Aws.webp";
import azure from "../assets/images/Azure.webp";
import bootstrap from "../assets/images/Bootstrap.webp";
import css from "../assets/images/Css.webp";
import django from "../assets/images/Django.webp";
import html from "../assets/images/Html.webp";
import illustrator from "../assets/images/Illustrator.webp";
import jira from "../assets/images/Jira.webp";
import javascript from "../assets/images/Js.webp";
import krita from "../assets/images/Krita.webp";
import mysql from "../assets/images/Mysql.webp";
import next from "../assets/images/Next.webp";
import photoshop from "../assets/images/Photoshop.webp";
import playwright from "../assets/images/PlaywRight.webp";
import postman from "../assets/images/Postman.webp";
import premiere from "../assets/images/PremierePro.webp";
import python from "../assets/images/Python.webp";
import react from "../assets/images/React.webp";
import selenium from "../assets/images/Selenium.webp";
import tailwind from "../assets/images/Tailwind.webp";
import typescript from "../assets/images/TypeScript.webp";
import vscode from "../assets/images/Vscode.webp";

export const translations = {
  es: {
    nav_home: "Inicio",
    nav_about: "Sobre mí",
    nav_skills: "Habilidades",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",
    hero_available: "Disponible para nuevos proyectos",
    hero_greeting_1: "Hola soy Samuel Gómez",
    hero_greeting_2: "más conocido como ",
    hero_download: "Descargar CV",
    about_title: "Sobre mí",
    about_p1:
      'Soy un <strong>QA Tester</strong> con experiencia en pruebas web, asegurando la calidad de las aplicaciones antes de su lanzamiento. Me especializo en crear casos de prueba, <span class="accent-text">identificar y reportar errores</span>, y colaborar con equipos de desarrollo para optimizar productos. He trabajado con grandes empresas, asegurando que sus productos sean funcionales, eficientes y libres de errores antes de llegar a los usuarios finales.',
    about_p2:
      'Destaco en la implementación de <strong>metodologías ágiles</strong>, asegurando una comunicación fluida entre testers y desarrolladores. Tengo experiencia en <span class="secondary-accent-text">pruebas funcionales, de regresión y automatización</span>, así como en la interacción con clientes para entender sus necesidades y mejorar la usabilidad. Mi objetivo es elevar la calidad del software a través de pruebas rigurosas y un enfoque proactivo en la resolución de problemas.',
    skills_title_1: "Habilidades & ",
    skills_title_2: "Experiencia",
    skills_subtitle: "Mi trayectoria profesional y arsenal técnico",
    skills_path: "Trayectoria Profesional",
    job1_desc:
      "Durante mi tiempo en Webhelp, tuve la oportunidad de trabajar como QA Tester, donde adquirí experiencia en pruebas de software y aseguramiento de calidad en entornos web, móviles y de telefonía.",
    job2_date: "2025 - Actualmente",
    job2_desc:
      "En mi rol actual, trabajo como Programador y Analista de Datos, aprovechando herramientas de automatización e inteligencia artificial para resolver problemas complejos e impulsar el crecimiento de ventas de la empresa.",
    skills_languages: "Lenguajes",
    skills_frameworks: "Frameworks y Herramientas",
    skills_ecosystem: "Ecosistema y Diseño",
    projects_title_1: "Mis ",
    projects_title_2: "Proyectos",
    projects_subtitle: "Conoce algo sobre mi trabajo",
    project1_desc: "Encuentra las paletas de colores perfectas para tus proyectos.",
    project2_desc:
      "Página de aterrizaje de Julian RPO Trainer, un cliente satisfecho mostrando su propio portafolio de entrenamiento.",
    project3_desc: "Acorta tus enlaces de manera más eficiente para tus futuros clientes.",
    project4_desc: "Extrayendo las últimas noticias de Google e implementando IA para resumirlas.",
    project5_desc: "Elimina fondos de tus fotos completamente gratis y rápido.",
    project6_desc:
      "Obtén información de miles de empresas colombianas para saber si están liquidadas o activas, perfecto para limpiar tu base de datos.",
    contact_title: "Contacto",
    contact_subtitle: "Construyamos algo juntos",
    contact_name: "Tu Nombre",
    contact_email: "Tu Email",
    contact_message: "Tu Mensaje",
    contact_send: "Enviar mensaje",
    typing_base: "Soy un full stack dev pero también un ",
    theme_control: "Cambiar apariencia",
    language_control: "Cambiar idioma a inglés",
    navigation_label: "Navegación principal",
    social_label: "Redes sociales",
    portrait_label: "Retrato de Samuel Gómez",
    technologies_label: "Tecnologías",
    project_preview: "Reproducir vista previa",
    project_pause: "Pausar vista previa",
    project_external: "Abrir proyecto en una pestaña nueva",
    contact_sending: "Enviando mensaje",
    contact_success: "Mensaje enviado correctamente.",
    contact_error: "No fue posible enviar el mensaje. Inténtalo de nuevo.",
    contact_required: "Campo obligatorio",
    contact_email_error: "Ingresa un correo electrónico válido.",
    skip_link: "Saltar al contenido",
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_available: "Available for new projects",
    hero_greeting_1: "Hi I'm Samuel Gómez",
    hero_greeting_2: "better known as ",
    hero_download: "Download CV",
    about_title: "About me",
    about_p1:
      'I am a <strong>QA Tester</strong> with experience in web testing, ensuring the quality of applications before their release. I specialize in creating test cases, <span class="accent-text">identifying and reporting errors</span>, and collaborating with development teams to optimize products. I have worked with large companies, ensuring that their products are functional, efficient, and bug-free before reaching end users.',
    about_p2:
      'I excel in implementing <strong>agile methodologies</strong>, ensuring fluid communication between testers and developers. I have experience in <span class="secondary-accent-text">functional, regression and automation testing</span>, as well as interacting with clients to understand their needs and improve usability. My goal is to elevate software quality through rigorous testing and a proactive approach to problem solving.',
    skills_title_1: "Skills & ",
    skills_title_2: "Experience",
    skills_subtitle: "My professional journey and technical arsenal",
    skills_path: "Professional Path",
    job1_desc:
      "During my time at Webhelp, I had the opportunity to work as a QA Tester, where I gained experience in software testing and quality assurance in web, mobile and telephony environments.",
    job2_date: "2025 - Currently",
    job2_desc:
      "In my current role, I work as a Programmer and Data Analyst, leveraging automation tools and artificial intelligence to solve complex problems and drive the company's sales growth.",
    skills_languages: "Languages",
    skills_frameworks: "Frameworks & Tools",
    skills_ecosystem: "Ecosystem & Design",
    projects_title_1: "My ",
    projects_title_2: "Projects",
    projects_subtitle: "Learn something about my work",
    project1_desc: "Find the perfect color palettes for your projects.",
    project2_desc:
      "Julian RPO Trainer's landing page, a satisfied client showcasing his own training portfolio.",
    project3_desc: "Shorten your links more efficiently for your future customers.",
    project4_desc: "Extracting the latest news from Google and implementing AI to summarize it.",
    project5_desc: "Remove backgrounds from your photos completely free and fast.",
    project6_desc:
      "Get information on thousands of Colombian companies to find out if they are liquidated or active, perfect for cleaning your database.",
    contact_title: "Contact",
    contact_subtitle: "Let's build something together",
    contact_name: "Your Name",
    contact_email: "Your Email",
    contact_message: "Your Message",
    contact_send: "Send Signal",
    typing_base: "I am a full stack dev but also a ",
    theme_control: "Change appearance",
    language_control: "Switch language to Spanish",
    navigation_label: "Primary navigation",
    social_label: "Social profiles",
    portrait_label: "Portrait of Samuel Gómez",
    technologies_label: "Technologies",
    project_preview: "Play preview",
    project_pause: "Pause preview",
    project_external: "Open project in a new tab",
    contact_sending: "Sending message",
    contact_success: "Message sent successfully.",
    contact_error: "The message could not be sent. Please try again.",
    contact_required: "Required field",
    contact_email_error: "Enter a valid email address.",
    skip_link: "Skip to content",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["es"];

export const navigation = [
  { href: "#Home", key: "nav_home", icon: "home" },
  { href: "#About", key: "nav_about", icon: "person" },
  { href: "#Skills", key: "nav_skills", icon: "stack" },
  { href: "#Proyects", key: "nav_projects", icon: "grid" },
  { href: "#Contact", key: "nav_contact", icon: "mail" },
] as const;

export interface SkillItem {
  name: string;
  image: ImageMetadata;
}

export const skillGroups: Array<{ key: TranslationKey; items: SkillItem[] }> = [
  {
    key: "skills_languages",
    items: [
      { name: "HTML", image: html },
      { name: "CSS", image: css },
      { name: "JS", image: javascript },
      { name: "TypeScript", image: typescript },
      { name: "Python", image: python },
    ],
  },
  {
    key: "skills_frameworks",
    items: [
      { name: "Bootstrap", image: bootstrap },
      { name: "Selenium", image: selenium },
      { name: "Django", image: django },
      { name: "Postman", image: postman },
      { name: "MySQL", image: mysql },
      { name: "Tailwind", image: tailwind },
      { name: "React", image: react },
      { name: "Next.js", image: next },
      { name: "Playwright", image: playwright },
    ],
  },
  {
    key: "skills_ecosystem",
    items: [
      { name: "VS Code", image: vscode },
      { name: "Jira", image: jira },
      { name: "Azure", image: azure },
      { name: "AWS", image: aws },
      { name: "Photoshop", image: photoshop },
      { name: "Premiere Pro", image: premiere },
      { name: "Illustrator", image: illustrator },
      { name: "Krita", image: krita },
    ],
  },
];

export const experiences = [
  {
    role: "QA Tester",
    company: "Webhelp",
    date: "2023 - 2024",
    descriptionKey: "job1_desc",
  },
  {
    role: "Developer",
    company: "Agencias nacionales",
    dateKey: "job2_date",
    descriptionKey: "job2_desc",
  },
] as const;

export const projects = [
  {
    title: "Color theme",
    href: "https://color-theme.notexer.dev",
    video: "/vids/ColorTheme.mp4",
    descriptionKey: "project1_desc",
    stack: ["React", "Tailwind"],
    tone: "magenta",
  },
  {
    title: "JulianRpo",
    href: "https://julian-rpo-trainer.notexer.dev",
    video: "/vids/JulianRpo.mp4",
    descriptionKey: "project2_desc",
    stack: ["Astro", "PHP", "Tailwind"],
    tone: "violet",
  },
  {
    title: "Link Short Pro",
    href: "https://link-short-pro.notexer.dev",
    video: "/vids/LinkShortPro.mp4",
    descriptionKey: "project3_desc",
    stack: ["Python", "Tailwind", "Fast API"],
    tone: "blue",
  },
  {
    title: "News Resumer",
    href: "https://news-resumer.notexer.dev",
    video: "/vids/NewsResumer.mp4",
    descriptionKey: "project4_desc",
    stack: ["Astro", "Tailwind", "Gemini API", "Ollama"],
    tone: "violet",
  },
  {
    title: "RemooVI",
    href: "https://remoovi.notexer.dev",
    video: "/vids/RemooVI.mp4",
    descriptionKey: "project5_desc",
    stack: ["Python", "Tailwind", "Fast API"],
    tone: "magenta",
  },
  {
    title: "Rues Automatizacion",
    href: "https://automatizacion-rues.notexer.dev",
    video: "/vids/RuesAutomatizacion.mp4",
    descriptionKey: "project6_desc",
    stack: ["Next.js", "Tailwind", "React"],
    tone: "blue",
  },
] as const;

export const rotatingRoles = ["QA tester", "Gamer", "Pro", "Genius"] as const;
