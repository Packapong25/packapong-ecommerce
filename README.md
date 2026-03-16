# Packapong — E-Commerce Website

A clean, elegant e-commerce website built with plain HTML, CSS, and JavaScript. No frameworks or build tools required.

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| Shop | `index.html` | Product listing with category filters |
| Product Detail | `product.html` | Individual product page with size selector |
| Cart | `cart.html` | Shopping cart with quantity management |
| Checkout | `checkout.html` | Order form with summary |

## 🗂️ File Structure

```
lumiere-ecommerce/
├── index.html       # Product listing page
├── product.html     # Product detail page
├── cart.html        # Shopping cart
├── checkout.html    # Checkout form
├── style.css        # All styles
├── data.js          # Product data
├── cart.js          # Cart logic (localStorage)
└── README.md
```

## ✨ Features

- **Product Listing** — 12 products across 3 categories (Clothing, Accessories, Footwear)
- **Category Filters** — Filter products by category
- **Product Detail** — Quantity selector, size picker, related products
- **Shopping Cart** — Add/remove items, update quantities, free shipping threshold
- **Checkout** — Contact, shipping address, payment form with input formatting
- **Persistent Cart** — Cart state saved in `localStorage`
- **Responsive** — Mobile-friendly layout

## 🚀 Getting Started

Just open `index.html` in your browser — no server or build step needed.

For a better local development experience, use VS Code's Live Server extension.

## 🎨 Design

- **Typography**: Cormorant Garamond (display) + DM Sans (body)
- **Palette**: Warm off-white background, dark ink, muted tones
- **Style**: Refined editorial / luxury minimal

## 🛠️ Customization

- Edit products in `data.js`
- Colors and fonts via CSS variables in `style.css` (`:root` block)
- To connect real payments, integrate [Stripe.js](https://stripe.com/docs/js)
