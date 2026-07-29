# Paradise Nursery

**Paradise Nursery** is a React + Redux e-commerce web application for an online plant store. The project name, "Paradise Nursery," reflects the site's purpose: giving customers a calm, garden-like shopping experience where they can browse and buy houseplants online.

## Project Overview

Paradise Nursery lets customers:

- View a landing page introducing the company and its mission.
- Browse houseplants organized into categories (Air Purifying Plants, Aromatic Plants, Low Maintenance Plants).
- Add plants to a shopping cart and track the running item count via a cart icon.
- View, update quantities in, and remove items from the shopping cart.
- See a live total cost for the cart.

## Tech Stack

- **React** (functional components + hooks)
- **Redux Toolkit** (`@reduxjs/toolkit`, `react-redux`) for cart state management
- **Vite** as the build tool / dev server
- **CSS** for styling (including a background image on the landing page)

## Project Structure

```
paradise-nursery/
├── public/
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── ProductList.jsx
│   │   └── CartItem.jsx
│   ├── redux/
│   │   ├── CartSlice.jsx
│   │   └── store.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173`) in your browser.

## Features

1. **Landing Page** — Company name, tagline, background image, and a "Get Started" button that takes the user to the product listing.
2. **About Us** — A short section describing Paradise Nursery's mission and values.
3. **Product Listing** — Plants grouped by category, each with a thumbnail, name, price, and an "Add to Cart" button that disables once clicked and increments the cart icon count.
4. **Shopping Cart** — Displays each item's thumbnail, name, unit price, quantity controls (increase/decrease), a delete button, the per-item subtotal, and the overall cart total. Includes a "Checkout" button (shows a "Coming Soon" message) and a "Continue Shopping" button that returns to the product listing.

## Author

Built as part of a front-end development course project.
