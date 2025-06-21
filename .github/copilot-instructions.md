# GitHub Copilot Instructions


## 🧱 Tech Stack

| Technology               | Version           | Context7 Library ID              |
|--------------------------|-------------------|----------------------------------|
| Next.js                  | v15               | `/vercel/next.js`                |
| React                    | v19               | `/reactjs/react.dev`             |
| TypeScript               | v5                | `/microsoft/typescript`          |
| Tailwind CSS             | v4                | `/tailwindlabs/tailwindcss.com`  |
| Material UI              | v7.1.1            | `/mui/material-ui`               |
| ESLint (flat config)     | v9                |                                  |


---

## 📐 Code Principles

Prioritize clarity and maintainability over abstractions or optimizations. Keep the code simple, readable, and easy to iterate on — avoid overengineering and squeezing performance. Stick to conventional patterns.

Use a **Tailwind-first** approach for styling. Rely on utility classes for layout, spacing, color, and responsiveness. Use MUI’s `sx` prop only when necessary (e.g. when styling components without `className` support). Avoid mixing Tailwind and MUI styles in the same component unless unavoidable.

Don’t manually format snippets or files — run: `npm run lint:fix` or let the developer handle it.

---

## 🎨 Design Philosophy

The goal is to build **beautiful, minimal SaaS web apps** with a clean, premium feel.

Use a monochromatic color system based on the app’s MUI primary theme color. Build visual hierarchy with tonal variations of this hue and neutral grays for inactive or secondary elements. Avoid multicolor palettes or primary/secondary schemes. Ensure consistency in both light and dark modes using contrast and saturation — not hue shifts.

Typography, spacing, and component alignment should feel intentional. Design should be subtle, unified, and free from visual clutter.

---

## 👤 About the Developer

This project is maintained by a solo developer focused on building small-scale, form-heavy SaaS applications. These apps are not enterprise-scale or performance-critical — the focus is on **shipping quickly**, **looking great**, and being **easy to maintain** long-term.
