---
title: Electro-Graphite Web Portfolio Requirements
---

# 1. Project Overview

This document outlines the detailed requirements for Uğur Emin Baynal's
personal portfolio website, referred to as the \"Electro-Graphite\"
project. The site serves as a bilingual (primary: English, secondary:
Turkish) digital portfolio, highlighting engineering projects,
experience, skills, and certifications.

# 2. General Requirements

\- Primary Language: English\
- Secondary Language: Turkish (toggle via top navigation)\
- Fully responsive (mobile, tablet, desktop)\
- Dark-themed user interface with technical, electrical aesthetics\
- Optimized for performance, accessibility, and SEO

# 3. Visual Design & Theme

Theme Name: Electro-Graphite

Color Palette:

\- Background (Primary): #0f0f0f (Night Graphite)\
- Background (Cards): #1f1f1f (Smoky Steel)\
- Text (Main): #e0e0e0 (Cloud White)\
- Accent: #00ffff (Electric Cyan)\
- Secondary Accent: #2979ff (Neon Blue)\
- Action Buttons: #ff6f00 (Cyber Orange)\
- Borders/Shadows: #2c2c2c (Soft Graphite)

# 4. Typography

Font Stack: IBM Plex Sans, Inter, JetBrains Mono

\- H1: IBM Plex Sans, 48px, 700, #e0e0e0\
- H2: IBM Plex Sans, 32px, 600, #e0e0e0\
- H3: JetBrains Mono, 24px, 500, #00ffff\
- Body: Inter, 16px, 400, #e0e0e0\
- Body Small: Inter, 14px, 400, #c7c7c7\
- Code/Accent: JetBrains Mono, 16px, 500, #2979ff\
- Buttons: Inter, 16px, 600, background #ff6f00, text #0f0f0f\
- Nav/Footer: Inter, 14px, 500, #a0a0a0

# 5. Page Structure

Home (/): Hero section, CTA, language switch, minimal intro

About (/about): Bio, education, technical & soft skills

Projects (/projects): Cards with filters, modal/project pages

Experience (/experience): Timeline of work & internships

Certificates (/certificates): Grid with optional links

Community (/community): Leadership, volunteering, MUN

Contact (/contact): Form, links, location, CV download

# 6. Component Architecture

\- Navbar: Name/logo, navigation links, language toggle\
- HeroSection: Name, titles, CTA buttons\
- ProjectCard: Title, description, tags, links\
- TimelineItem: For experience, education\
- CertCard: Certificate name, organization, link\
- LanguageToggle: EN/TR switch (i18n support)\
- ContactForm: Input fields + message\
- Footer: Navigation links, social, copyright

# 7. Layout & Grid System

\- 12-column responsive layout\
- Breakpoints: Desktop (≥1024px), Tablet (≥768px), Mobile (\<768px)\
- Flexible rem/% based sizing with appropriate paddings and margins

# 8. UX Guidelines

\- Hover effects for interactive elements\
- Active state indication for navigation and buttons\
- Scroll-based reveal animations\
- Accessible color contrast and tab-indexing\
- Responsive touch targets on mobile devices

# 9. SEO & Optimization

\- SSR (Next.js/Astro) for fast first paint\
- Structured meta tags and OpenGraph data\
- Multilingual SEO via hreflang/canonical URLs\
- Lighthouse performance score target: 90+
