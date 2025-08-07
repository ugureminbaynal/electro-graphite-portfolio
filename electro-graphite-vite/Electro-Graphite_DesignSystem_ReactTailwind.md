
# Electro-Graphite Design Specification (React + Tailwind CSS)

This document provides a structured design specification for the "Electro-Graphite" personal portfolio site built with React and Tailwind CSS. It focuses exclusively on visual design, layout components, and style behavior. Backend and deployment details are excluded.

---

## 🎨 Theme

**Name:** Electro-Graphite  
**Type:** Dark, technical, minimal

### Color Palette

| Name              | Hex        | Usage                             |
|-------------------|------------|-----------------------------------|
| Night Graphite    | `#0f0f0f`  | Main background                   |
| Smoky Steel       | `#1f1f1f`  | Card backgrounds                  |
| Cloud White       | `#e0e0e0`  | Primary text                      |
| Electric Cyan     | `#00ffff`  | Primary accent (hover, icons)     |
| Neon Blue         | `#2979ff`  | Secondary accent (underline, tags)|
| Cyber Orange      | `#ff6f00`  | CTA buttons                       |
| Soft Graphite     | `#2c2c2c`  | Shadows, dividers                 |

---

## 🔠 Typography

### Font Stack
- `IBM Plex Sans` – Headings
- `Inter` – Paragraphs, UI text
- `JetBrains Mono` – Code, project tags

### Typographic Scale

| Element         | Font              | Size  | Weight | Color        |
|-----------------|-------------------|-------|--------|--------------|
| H1              | IBM Plex Sans     | 48px  | 700    | Cloud White  |
| H2              | IBM Plex Sans     | 32px  | 600    | Cloud White  |
| H3 (Card Title) | JetBrains Mono    | 24px  | 500    | Electric Cyan|
| Body Text       | Inter             | 16px  | 400    | Cloud White  |
| Small Text      | Inter             | 14px  | 400    | #c7c7c7      |
| Accent/Code     | JetBrains Mono    | 16px  | 500    | Neon Blue    |
| Button Text     | Inter             | 16px  | 600    | Night Graphite on Cyber Orange |
| Nav/Footer      | Inter             | 14px  | 500    | #a0a0a0      |

---

## 🧱 Layout System

### Grid
- **12-column grid** with responsive breakpoints
- Tailwind utilities: `grid-cols-12`, `col-span-*`
- Padding: `px-4 md:px-8 lg:px-12`
- Max-width containers for content: `max-w-7xl`

### Breakpoints
- `sm`: ≥640px
- `md`: ≥768px
- `lg`: ≥1024px
- `xl`: ≥1280px

---

## 🧩 Components & Tailwind Classes

### Navbar
- `flex justify-between items-center p-4`
- Sticky with backdrop blur: `sticky top-0 backdrop-blur bg-opacity-80`

### Hero Section
- Centered layout: `flex flex-col items-center text-center pt-32`
- Animated accent underline on name using `before:content-[''] before:block before:h-1 before:bg-cyan-400`

### Project Card
- Container: `bg-[#1f1f1f] p-6 rounded-lg shadow-md hover:shadow-lg transition`
- Tags: `text-sm font-mono text-[#2979ff]`

### Timeline Item
- Vertical line: `border-l-2 border-[#2979ff] pl-4 ml-2`
- Time + content: `text-sm text-gray-400`

### Contact Form
- Inputs: `bg-[#1f1f1f] border border-[#2c2c2c] rounded p-3 text-white`
- Button: `bg-[#ff6f00] hover:bg-orange-600 text-[#0f0f0f] font-semibold py-2 px-4 rounded`

### Footer
- Layout: `grid grid-cols-2 md:grid-cols-4 gap-4 p-6 text-sm text-gray-400`
- Optional tagline: `"Engineered with electricity & elegance."`

---

## 🧠 UX Notes

- Hover animations with `transition` and `duration-300`
- Use `focus:outline-none` and `focus:ring` for accessibility
- Use `aria-label` and `sr-only` classes for screen readers
- Theme should remain consistent across light/dark variants (if added)

---

## ✅ Component Summary

- `Navbar`
- `HeroSection`
- `ProjectCard`
- `TimelineItem`
- `CertCard`
- `LanguageToggle`
- `ContactForm`
- `Footer`

---

This spec is intended for implementation in a modern, modular React + Tailwind CSS environment. SSR, routing, and form backend are out of scope.
