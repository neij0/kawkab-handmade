# Kawkab Handmade

An Arabic-only (RTL) showcase website for a Sudanese family business that makes handmade perfumes, incense, and body and hair care products.
There is no checkout: visitors browse the catalog and place orders through WhatsApp.

**Live site:** https://kawkab-handmade.netlify.app

## Features

- **Category filters:** the catalog filters products by category instantly, without reloading the page.
- **Load more:** the catalog shows 12 products at a time, with a "Load more" button for the rest.
- **Mobile drawer:** on small screens, a hamburger menu opens a side drawer with an accordion of categories linked to the catalog filters.
- **Scroll animations:** elements fade in as they enter the viewport, using the Intersection Observer API.
- **Reduced motion support:** all animations respect `prefers-reduced-motion`.
- **Preloader:** an animated 3D logo shows while the page loads.

## Tech

- HTML
- CSS
- Vanilla JavaScript

No frameworks, no libraries, and no build step.

Hosted on Netlify with continuous deployment from GitHub.

## What I learned

- **Performance for every visitor:** I converted the scrollytelling images to
  WebP and compressed the hero video from 5.6MB to 2.9MB, so the site stays
  fast on low-end devices and slow connections.

- **Acting on user feedback:** People who tested the site said the logo was
  hard to see over the hero video. I added a dark overlay that keeps the video
  visible, plus a shadow and filter on the logo, so it reads clearly on every
  frame without hurting the design.

- **Scroll-driven sections with `position: sticky`:** I built the
  scrollytelling section with a tall container (250vh) and a sticky
  full-screen stage inside it, so the section stays pinned while scrolling
  controls the animation.
