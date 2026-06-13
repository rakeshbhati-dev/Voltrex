# Voltrex Gym — Fitness Landing Page

A bold, high-contrast gym landing page built as a freelance portfolio showcase. Designed for maximum visual impact with a dark theme, aggressive typography, and smooth interactions across all screen sizes.

![Voltrex Gym](https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80&auto=format&fit=crop)

---

## Tech Stack

- **React** — component-based UI
- **Tailwind CSS v4** — utility-first styling with custom theme tokens
- **Lucide React** — icons
- **Vite** — build tool

---

## Sections

| Section | Description |
|---|---|
| **Navbar** | Sticky navigation with mobile hamburger menu |
| **Hero** | Full-screen banner with headline, CTA buttons, and live stats |
| **Programs** | Training program cards — Powerlifting, HIIT, CrossFit, Yoga |
| **About** | Two-column layout with image collage and feature list |
| **Trainers** | Trainer profile cards with specialization tags |
| **Plans** | Interactive 3-tier pricing — click to select a plan |
| **Gallery** | Asymmetric image grid (desktop) / swipeable carousel (mobile) |
| **Banner** | Full-width CTA section with free trial offer |
| **Footer** | 4-column footer with links and brand info |

---

## Highlights

**Interactive Pricing Cards**
Clicking a plan card selects it — the popular plan stays highlighted in red always, while selected state shows a border + scale effect. On mobile it collapses into a streaming-service style list with expandable features.

**Responsive Gallery**
On desktop, images are laid out in an asymmetric 12-column grid for a editorial feel. On mobile, the same images become a carousel with left/right arrow navigation and dot indicators.

**Mobile-first Navbar**
Sticky navigation with a slide-down hamburger menu on mobile. Closes automatically on link tap.

**Dark Theme Design System**
All colors are defined as CSS custom properties in Tailwind's `@theme` block — making it easy to reskin the entire site by changing a handful of variables.

```css
--color-primary: #EF4444
--color-dark: #0A0A0A
--color-background: #1F1F1F
--color-gray: #9CA3AF
--color-border: #2A2A2A
```

---

## Design Reference

| Property | Value |
|---|---|
| Background | `#0A0A0A` |
| Primary | `#EF4444` (Red) |
| Font | Barlow Condensed |
| Feel | Dark · Energetic · Bold |

---

## Live Demo

[View Live →](https://voltrex.netlify.app)

---

## About This Project

Built as a freelance sample project to demonstrate landing page design and development capabilities. The goal was to create a production-ready, visually striking gym website that could be handed off to a real client with minimal changes.

If you're looking for a similar landing page for your business — [get in touch](mailto:your@email.com).

---

*Designed & developed by [Your Name](https://yourportfolio.com)*
