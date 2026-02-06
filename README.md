# AVR Fitness Club Website

Modern, SEO-optimized React (Vite) site focused on lead generation and mobile users.

## Quick Start

```powershell
cd /d d:\Practice\React
npm install
npm run dev
```

Open the local URL printed by Vite (e.g., http://localhost:5173).

## Pages

- Home: SEO hero, services, why choose us, testimonials
- About: Mission, vision & values, trainer expertise
- Contact: Lead form with validation, contact details, map placeholder

## Customize

- Update phone (`tel:`), address, email in `src/pages/Contact.jsx`
- Add real social links in `src/components/Footer.jsx`
- Replace meta/canonical in `index.html` when you have the live domain

## Notes

- Lightweight animations via IntersectionObserver to maintain performance
- SEO managed via a custom `useSEO` hook (no external helmet dependency)
- Sticky header, smooth scrolling, click-to-call for mobile
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
