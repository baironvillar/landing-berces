# Berces Chile — Landing Page

Landing page corporativa para **Berces Chile**, empresa especializada en sistemas de videovigilancia y seguridad electrónica.

## Stack

- **Framework:** [Astro](https://astro.build) 5
- **UI:** [React](https://react.dev) 18
- **Estilos:** [Tailwind CSS](https://tailwindcss.com) v4 + CSS Custom Properties
- **Iconos:** [Lucide React](https://lucide.dev)
- **Fuentes:** Inter, Barlow Condensed, DM Mono (Google Fonts)

## Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Vista previa del build
npm run preview

# Type-check
npm run typecheck

# Linter
npm run lint

# Formatear código
npm run format
```

## Despliegue en Vercel

### Configuración automática (recomendada)

Vercel detecta Astro automáticamente. Solo conectar el repositorio y hacer deploy.

### Configuración manual (si es necesario)

| Parámetro | Valor |
|---|---|
| **Framework preset** | Astro |
| **Build command** | `npm run build` |
| **Output directory** | `dist` |
| **Install command** | `npm install` |
| **Node.js version** | 20.x o superior |

### Archivo `vercel.json` (opcional)

El proyecto incluye un `vercel.json` con la configuración explícita por si se requiere.

## Estructura del proyecto

```
src/
├── components/
│   ├── sections/     # Secciones de la landing (Navbar, Hero, Footer, etc.)
│   └── ui/           # Componentes reutilizables (Button, ServiceCard, etc.)
├── data/             # Datos estáticos (servicios, testimonios, etc.)
├── layouts/          # Layouts de Astro
├── pages/            # Páginas de Astro
├── styles/           # Archivos CSS (tailwind.css, theme.css, fonts.css)
└── types/            # Tipos TypeScript
```
