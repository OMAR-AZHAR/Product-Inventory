# Product Inventory Dashboard

## Overview

This **Product Inventory Dashboard** is built with **Next.js**, **Tailwind CSS**, **shadcn/ui components**, and **Tanstack Table**. It allows users to manage and analyze product inventory, featuring sorting, filtering, pagination, and visualizations.

## Features Implemented

1. **Product Inventory Table**: 
   - Displays columns for Product ID, Name, Category, Price, Stock Level, Status, Added Date, and Actions (Edit, Delete).
   
2. **Data Filtering & Sorting**: 
   - Sorting by Product Name, Price, and Stock Level.
   - Global search and category/status filters for easy product management.

3. **Product Detail Panel**: 
   - Expandable row view showing product details, including description, metadata, and an image placeholder.

4. **Edit Form**: 
   - A form for editing product details, with validation for required fields and automatic table updates after submission.

5. **Pagination**: 
   - Pagination functionality with selectable page sizes (10, 20, 50) and current page display.

6. **Analytics Section**: 
   - Visualizations for product categories, stock levels, and price ranges.

7. **Responsive Design**: 
   - Optimized for desktop, tablet, and mobile devices using Tailwind CSS.

8. **Bonus Features**:
   - Data export to CSV.
   - Theme toggle (light/dark mode) with **shadcn/ui** components.
   - **React Query** for efficient data fetching and state management.
   - Toast notifications for user feedback (success/fail actions).
   - **Infinite Scroll** (Not implemented yet).

## Setup and Run Instructions

### Prerequisites

- **Node.js** (v16+)
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   1. git clone <https://github.com/OMAR-AZHAR/Product-Inventory>
   2. Run yarn
   3. yarn dev
   

### Project Tree

```
product-inventory-dashboard
├─ app
│  ├─ api
│  │  └─ products
│  │     └─ route.ts
│  ├─ dashboard
│  │  └─ products
│  │     ├─ components
│  │     │  ├─ Analytics.tsx
│  │     │  ├─ columns.tsx
│  │     │  ├─ DataTable.tsx
│  │     │  ├─ ProductDetailModal.tsx
│  │     │  └─ ProductForm
│  │     │     └─ ProductForm.tsx
│  │     ├─ edit
│  │     │  └─ [id]
│  │     │     └─ page.tsx
│  │     ├─ layout.tsx
│  │     ├─ loading.tsx
│  │     ├─ new
│  │     │  └─ page.tsx
│  │     └─ page.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ providers.tsx
├─ components
│  ├─ ThemeToggle.tsx
│  └─ ui
│     ├─ badge.tsx
│     ├─ button.tsx
│     ├─ calendar.tsx
│     ├─ card.tsx
│     ├─ dialog.tsx
│     ├─ dropdown-menu.tsx
│     ├─ form.tsx
│     ├─ input.tsx
│     ├─ label.tsx
│     ├─ popover.tsx
│     ├─ select.tsx
│     ├─ table.tsx
│     └─ textarea.tsx
├─ components.json
├─ eslint.config.mjs
├─ lib
│  ├─ data.ts
│  ├─ schemas.ts
│  └─ utils.ts
├─ next.config.ts
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ tsconfig.json
└─ yarn.lock

```
