# NotExer Portfolio

Portafolio profesional de Samuel Gomez Restrepo, desarrollado con Astro 7, Tailwind CSS 4 y TypeScript. Presenta experiencia en QA y desarrollo full stack, habilidades técnicas, proyectos y medios de contacto.

Sitio público: [portfolio-notexer.vercel.app](https://portfolio-notexer.vercel.app)

## Características

- Interfaz responsive optimizada desde 320 px hasta pantallas amplias.
- Tema claro, oscuro y preferencia inicial del sistema.
- Contenido completo en español e inglés.
- Navegación accesible por teclado, foco visible y enlace para saltar al contenido.
- Animaciones respetuosas de `prefers-reduced-motion`.
- Imágenes responsive procesadas por Astro y videos cargados solo bajo demanda.
- Formulario con validación accesible, protección honeypot y credenciales únicamente en variables de entorno.
- Metadatos SEO, Open Graph, sitemap y Vercel Speed Insights.

## Desarrollo local

Requiere Node.js 22 o una versión LTS compatible con Astro 7.

```bash
npm install
npm run dev
```

El servidor local estará disponible en la dirección indicada por Astro, normalmente `http://localhost:4321`.

## Comandos

```bash
npm run dev
npm run check
npm run build
npm run preview
```

## Formulario de contacto

Copia `.env.example` como `.env` y configura las variables SMTP:

```env
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASSWORD=
CONTACT_TO=
```

La función de contacto se despliega bajo demanda mediante el adaptador de Vercel. Nunca incluyas credenciales reales en el repositorio.

## Estructura

```text
src/
  assets/images/       Imágenes procesadas por Astro
  components/          Componentes de la interfaz
  data/site.ts         Contenido y traducciones
  layouts/             Metadatos y estructura base
  pages/               Página principal y endpoint de contacto
  styles/global.css    Tokens, componentes y estilos responsive
public/
  documents/           Curriculum vitae
  vids/                Demostraciones de proyectos
```

## Despliegue

El proyecto está preparado para Vercel. Define las variables SMTP en el panel del proyecto y ejecuta `npm run build` como validación previa.

Todos los derechos reservados, 2026 NotExer.
