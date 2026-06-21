# Guía de Estilos — Berces Chile Landing

## Stack

| Herramienta | Uso |
|---|---|
| **Astro 5** | Framework base |
| **React 18** | Componentes interactivos |
| **Tailwind CSS v4** | Utilidades CSS (sin archivo de configuración, vía `@import "tailwindcss"`) |
| **CSS Custom Properties** | Tema definido en `src/styles/theme.css` |
| **tw-animate-css** | Animaciones utilitarias (via `@import "tw-animate-css"`) |
| **Lucide React** | Iconos |
| **Biome** | Linter + formateador |

---

## Archivos de estilo (orden de importación)

```
src/styles/index.css
├── fonts.css          → Google Fonts (Inter, Barlow Condensed, DM Mono)
├── tailwind.css       → Tailwind + tw-animate-css + source scanning
└── theme.css          → Custom properties + @theme inline + @layer base
```

---

## Paleta de colores

Todas las variables están definidas en `:root` en `theme.css` y mapeadas al theme de Tailwind via `@theme inline {}`.

| Variable CSS | Tailwind | Valor | Descripción |
|---|---|---|---|
| `--background` | `bg-background` | `#080c14` | Fondo principal (azul noche muy oscuro) |
| `--foreground` | `text-foreground` | `#e8edf5` | Texto principal (blanco azulado) |
| `--card` | `bg-card` / `border-card` | `#0f1623` | Fondos de tarjetas |
| `--card-foreground` | `text-card-foreground` | `#e8edf5` | Texto sobre card |
| `--primary` | `bg-primary` / `text-primary` | `#f5c200` | Amarillo — color de acento principal |
| `--primary-foreground` | `text-primary-foreground` | `#080c14` | Texto sobre fondo primary |
| `--secondary` | `bg-secondary` | `#1a1a0f` | Fondo secundario |
| `--secondary-foreground` | `text-secondary-foreground` | `#e8edf5` | Texto sobre secondary |
| `--muted` | `bg-muted` | `#12120a` | Fondo muted |
| `--muted-foreground` | `text-muted-foreground` | `#8a8a6a` | Texto secundario / tenue |
| `--accent` | `text-accent` / `fill-accent` | `#ff8c00` | Naranja — usado en estrellas |
| `--accent-foreground` | `text-accent-foreground` | `#080c14` | Texto sobre accent |
| `--destructive` | `bg-destructive` | `#ef4444` | Rojo destructivo |
| `--border` | `border-border` | `rgba(245, 194, 0, 0.12)` | Bordes translúcidos (basados en primary) |
| `--input` | `bg-input` | `transparent` | Fondo de inputs |
| `--input-background` | `bg-input-background` | `#1a2236` | Fondo real de inputs |
| `--ring` | `ring-ring` | `#f5c200` | Anillo de focus |
| `--chart-1..5` | — | Varios | Colores para gráficos (no usados actualmente) |

### Colores adicionales hardcodeados (no en variables)

- WhatsApp flotante: `#25D366` (fondo), `#1ebe5d` (hover) — en `WhatsAppFloat.tsx`
- Verde de estado: `bg-green-400` — en Footer (uptime indicator)

---

## Tipografía

### Fuentes

| Fuente | CSS Variable | Tailwind | Peso | Uso |
|---|---|---|---|---|
| **Inter** | `--font-sans` | `font-sans` | 400, 500, 600 | Texto general y UI |
| **Barlow Condensed** | `--font-heading` | `font-heading` | 400, 600, 700, 800 | Títulos y headings |
| **DM Mono** | `--font-mono-alt` | `font-mono` | 400, 500 | Etiquetas técnicas, metadata, código |

### Tamaños base

```css
:root { font-size: 16px; }
```

### Jerarquía de headings (definida en `@layer base`)

| Elemento | Tamaño | Peso | Line-height |
|---|---|---|---|
| `h1` | `var(--text-2xl)` ≈ `1.5rem` | 600 | 1.5 |
| `h2` | `var(--text-xl)` ≈ `1.25rem` | 600 | 1.5 |
| `h3` | `var(--text-lg)` ≈ `1.125rem` | 600 | 1.5 |
| `h4` | `var(--text-base)` ≈ `1rem` | 600 | 1.5 |
| `label` | `var(--text-base)` | 600 | 1.5 |
| `button` | `var(--text-base)` | 600 | 1.5 |
| `input` | `var(--text-base)` | 400 | 1.5 |

> **Nota:** En la práctica los componentes sobrescriben estos tamaños con clases de Tailwind (ej: `text-4xl lg:text-5xl font-extrabold`).

### Patrones de texto comunes

- **Títulos de sección grandes:** `text-4xl lg:text-5xl font-extrabold font-heading`
- **Título Hero:** `text-5xl lg:text-7xl font-extrabold leading-none tracking-tight font-heading`
- **Subtítulo / label de sección:** `text-xs font-mono text-primary tracking-widest uppercase`
- **Párrafo cuerpo:** `text-muted-foreground leading-relaxed` (tamaño `text-sm` o `text-lg`)
- **Texto pequeño / metadata:** `text-xs text-muted-foreground font-mono`
- **Tags / badges:** `text-[10px] bg-secondary text-muted-foreground px-2 py-0.5 rounded border border-border font-mono`

---

## Layout y espaciado

### Contenedor principal

```tsx
<div className="max-w-7xl mx-auto px-6 lg:px-10">
```

- `max-w-7xl` (80rem / 1280px)
- Padding lateral: `px-6` (mobile), `lg:px-10` (desktop)
- Centrado con `mx-auto`

### Secciones

- Espaciado vertical: `py-24` (96px arriba y abajo)
- Secciones alternan fondo normal con `bg-muted/30` (usado en ServicesSection y TestimonialsSection)

### Grids

| Grid | Clase | Uso |
|---|---|---|
| 2 columnas | `grid lg:grid-cols-2 gap-12` | Hero, About, Contact |
| 4 columnas | `grid md:grid-cols-2 lg:grid-cols-4 gap-5` | Services |
| 4 columnas sin gap | `grid md:grid-cols-4 gap-0` | Process |
| 3 columnas | `grid md:grid-cols-3 gap-6` | Testimonials |
| 2 columnas form | `grid sm:grid-cols-2 gap-4` | Contact (nombre + teléfono) |

### Gap entre elementos

- `gap-3`: botones inline
- `gap-4`: stats grid, listas de features
- `gap-5`: service cards
- `gap-6`: testimonials
- `gap-8`: nav links, footer columns
- `gap-12`: hero content
- `gap-16`: secciones partidas (About, Contact)

---

## Componentes UI

### Button (`src/components/ui/Button.tsx`)

| Prop | Valores |
|---|---|
| `variant` | `"primary"` (default) o `"outline"` |
| `href` | Renderiza `<a>` si se pasa |
| `onClick` | Renderiza `<button>` si se pasa |

**Estilos base:** `inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-semibold transition-colors`

- `primary`: `bg-primary text-primary-foreground hover:bg-primary/90`
- `outline`: `border border-border text-foreground hover:border-primary/50 hover:bg-secondary/50`

### SectionTitle (`src/components/ui/SectionTitle.tsx`)

```tsx
<SectionTitle
  label="// Label pequeño"       // text-xs font-mono text-primary tracking-widest uppercase
  title="TEXTO PRINCIPAL"        // text-4xl lg:text-5xl font-extrabold font-heading
  highlight="RESALTADO"          // <span className="text-primary">
  center                         // opcional, centra el bloque
/>
```

### ServiceCard (`src/components/ui/ServiceCard.tsx`)

- Fondo: `bg-card border border-border rounded-lg p-6`
- Hover: `hover:border-primary/40 hover:bg-secondary/30 cursor-pointer`
- Icon container: `w-10 h-10 bg-primary/15 rounded` → hover: `bg-primary/25`
- Tags: flex-wrap de `text-[10px]` con fondo secondary

### StatCard (`src/components/ui/StatCard.tsx`)

- Contenedor: `border border-border bg-card/50 rounded p-3`
- Valor: `text-2xl font-extrabold text-primary font-heading`
- Label: `text-xs text-muted-foreground mt-0.5 font-mono`

### TestimonialCard (`src/components/ui/TestimonialCard.tsx`)

- Contenedor: `bg-card border border-border rounded-lg p-6`
- Estrellas: `text-accent fill-accent`
- Texto: `text-sm text-muted-foreground leading-relaxed mb-5 italic`
- Avatar placeholder: `w-8 h-8 rounded-full bg-secondary border border-border`

---

## Secciones

| Sección | id | Clases distintivas |
|---|---|---|
| Navbar | — | `fixed top-0 inset-x-0 z-50`, bg `bg-background/95 backdrop-blur` al scrollear |
| Hero | `#inicio` | `min-h-screen`, gradientes radiales + grid pattern como pseudo-fondos |
| Services | `#servicios` | `py-24 bg-muted/30` |
| Process | — | `py-24`, step circles `w-16 h-16 rounded-full border-2 border-primary/40` |
| About | `#nosotros` | `py-24`, imagen con `opacity-65` + gradiente overlay |
| Testimonials | — | `py-24 bg-muted/30` |
| Contact | `#contacto` | `py-24`, formulario en `bg-card border border-border rounded-lg p-8` |
| Footer | — | `border-t border-border py-10` |
| WhatsApp Float | — | `fixed bottom-6 right-6 z-50`, bg `#25D366` |

### Navbar

- Estado inicial: `bg-transparent`
- Estado scrolled (window.scrollY > 40): `bg-background/95 backdrop-blur border-b border-border`
- Mobile menu: `bg-card border-t border-border px-6 py-4`
- Logo: Icono `Camera` en `w-8 h-8 bg-primary rounded` + texto con `font-heading`

### Hero

- Fondo capa 1: gradiente radial (cyan suave + ámbar suave sobre `#080c14`)
- Fondo capa 2: `opacity-[0.04]` grid pattern (60px)
- NVR mockup: `border border-primary/20 bg-black aspect-[4/3]` con cuadrícula 2×2
- Scanlines: `repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 3px)`

### Formulario de Contacto

- Inputs/selects/textarea: `w-full bg-secondary border border-border rounded px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors`
- Labels: `block text-xs text-muted-foreground mb-1.5 font-mono`
- Botón submit: `w-full bg-primary text-primary-foreground py-3 rounded font-semibold hover:bg-primary/90`

---

## Patrones recurrentes

### Bordes decorativos

- `border border-border` — borde estándar translúcido
- `border border-primary/20` — borde con primary para elementos destacados
- `border-t border-border` — separadores (footer top, navbar bottom)

### Efectos hover

- Links de navegación: `hover:text-foreground transition-colors`
- Botón primary: `hover:bg-primary/90 transition-colors`
- Servicio card: `hover:border-primary/40 hover:bg-secondary/30`
- Icono en card: `group-hover:bg-primary/25`

### Animaciones

- `transition-all duration-300` — navbar background
- `transition-colors` — hover en links, botones
- `animate-pulse` — indicador de estado "activo" (Hero, NVR)
- `hover:bg-primary/90 transition-colors` — botones

### Sombras

- `shadow-2xl` — badge flotante en About (certificación Hikvision)
- `shadow-2xl` — WhatsApp float button

### Opacidad de imágenes

- Imágenes decorativas: `opacity-65`, `opacity-75 grayscale`
- Overlay gradiente: `bg-gradient-to-tr from-background/60 to-transparent`

---

## Convenciones de código

- **Sin comentarios** en JSX/CSS (estilo del proyecto)
- Iconos de Lucide con `size={N}` (14-16 para pequeños, 20 para medianos)
- Import type con `import type { ... }` separado
- Props tipadas con `interface` local en cada componente
- `loading="lazy"` en imágenes
- `target="_blank" rel="noopener noreferrer"` en enlaces externos
- Selectores de formulario con `id` + `htmlFor`

---

## Data files

| Archivo | Exporta | Tipo |
|---|---|---|
| `src/data/navigation.ts` | `NAV_LINKS`, `PHONE`, `PHONE_HREF`, `WHATSAPP_URL` | Navegación |
| `src/data/services.ts` | `SERVICES` | `Service[]` |
| `src/data/process.ts` | `PROCESS` | `ProcessStep[]` |
| `src/data/stats.ts` | `STATS` | `Stat[]` |
| `src/data/testimonials.ts` | `TESTIMONIALS` | `Testimonial[]` |
| `src/data/contact.ts` | `CONTACT_INFO` | `ContactItem[]` |

---

## Comandos útiles

```bash
npm run dev          # Desarrollo
npm run build        # Build producción
npm run preview      # Preview build
npm run lint         # Biome check
npm run lint:fix     # Biome auto-fix
npm run format       # Biome format
npm run typecheck    # astro check
```
