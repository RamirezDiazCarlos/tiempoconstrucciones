# Tiempo Construcciones

Landing page para Tiempo Construcciones, empresa especializada en construcción con Steel Framing en San Lorenzo, Santa Fe.

## Sobre el Proyecto

Sitio web desarrollado con **Astro 5** que presenta los servicios de construcción en Steel Framing de manera clara y profesional. El diseño transmite confianza y calidad, con foco en la conversión a través de múltiples puntos de contacto vía WhatsApp.

## Tecnologías

- **Astro 5** - Framework web moderno y rápido
- **TypeScript** - Tipado estático para mayor confiabilidad
- **Sharp** - Optimización automática de imágenes
- **CSS Custom Properties** - Sistema de diseño con variables centralizadas
- **Vercel** - Deploy y hosting

## Características

- Diseño responsive y mobile-first
- Optimización automática de imágenes (WebP)
- Navegación fija con efecto scroll (shrink al hacer scroll)
- Animaciones de entrada al hacer scroll (IntersectionObserver)
- Botón flotante de WhatsApp con mensaje predefinido
- CTA banner entre secciones para maximizar conversiones
- Secciones desplegables (acordeones) para especificaciones técnicas
- Integración con WhatsApp, Instagram y Facebook
- SEO optimizado (meta tags, Open Graph, robots.txt)
- Accesibilidad: aria-expanded, aria-hidden, prefers-reduced-motion
- Paleta de colores dual: verde institucional + naranja CTA
- Carga optimizada de Google Fonts (preconnect + preload)

## Estructura del Sitio

```
src/
├── components/
│   ├── Hero.astro           # Hero con navegación fija y CTA
│   ├── FAQ.astro            # Preguntas sobre Steel Framing
│   ├── CTABanner.astro      # Banner de conversión con WhatsApp
│   ├── Servicios.astro      # "Llave en Mano" y "Obra Gris"
│   ├── Footer.astro         # Contacto y redes sociales
│   └── WhatsAppFloat.astro  # Botón flotante de WhatsApp
├── layouts/
│   └── Layout.astro         # Layout principal con meta tags y scripts
├── pages/
│   └── index.astro          # Página principal
├── styles/
│   └── global.css           # Variables CSS y estilos globales
└── assets/
    └── imagenes/            # Imágenes optimizadas con Astro Image
```

## Secciones

1. **Hero** - Presentación principal con imagen de fondo y navegación fija
2. **Preguntas Frecuentes** - Información clave sobre Steel Framing (qué es, rapidez, costo)
3. **CTA Banner** - Call to action con enlace directo a WhatsApp
4. **Servicios** - Detalle de "Llave en Mano" y "Obra Gris" con especificaciones técnicas
5. **Contacto** - Teléfono, WhatsApp, ubicación y redes sociales

## Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción (incluye TypeScript check)
npm run build

# Preview del build
npm run preview
```

## Deploy

El sitio se despliega en **Vercel** con la configuración en `vercel.json`. El build genera archivos estáticos en `/dist`.

---

Desarrollado con [Astro](https://astro.build)
