# 🧠 Meme Directory

[LIVE DEMO](https://meme-web-kfht.onrender.com/)

**Meme Directory** is a fully functional CRUD application for viewing and editing memes. It features a clean UI, sortable tables, animated components, and form validation — all powered by modern technologies and structured with a scalable architecture.

---

## 🌟 Features

- 📊 **Meme Table** – Interactive, sortable table with edit functionality and modal dialogs.
- 🖼 **Meme List** – Card layout with animation and image preview.
- 🔗 **URL-based Sorting** – Sorting state is saved in the URL (`sort=id&order=asc`).
- ✅ **Form Validation** – Schema-based validation using Zod.
- 🔔 **Toasts** – Instant feedback for success and error states.
- 🧠 **Data Fetching** – Efficient with TanStack Query (queries + mutations).
- ✨ **Animations** – Smooth enter animations via Framer Motion.
- 🧼 **Modular structure** – FSD-based project structure.

---

## 🛠 Tech Stack

- **Vite** – Lightning-fast development server and build tool.
- **React** – Component-based UI framework.
- **HeroUI** – Clean and customizable component library.
- **TanStack Query** – Fetching, caching, and syncing server data.
- **Zod** – Type-safe schema validation for forms.
- **Framer Motion** – Animations and transitions.
- **TypeScript** – Strong typing across the app.
- **Render** – Hosting frontend, backend, and database separately.

---

## 📁 Project Structure
```
src/
├── api/            # API functions
├── components/     # Reusable UI components (e.g., MemeTable)
│   ├── AppNavbar/
│   ├── MemeList/
│   └── MemeTable/
├── config/         # Table column configuration
├── hooks/          # Custom hooks (queries, sorting)
├── pages/          # Route-based pages
├── schemas/        # Zod validation schemas
├── types/          # Type definitions
├── ui/             # UI effects or transitions
└── utils/          # Utilities (toasts, sort handling)
```

---

## 🚀 Deployment (Render)

This app is designed for **separate deployment** of:

- 🧑‍🎨 **Frontend** (React + Vite) — deploy as a **Static Site** on Render.
- ⚙️ **Backend** (NestJS or any REST API) — separate Render service.
- 🗃️ **Database** (PostgreSQL) — also deployed on Render.

> Make sure to define `VITE_API_URL` in your `.env` file in the frontend:

```env
VITE_API_URL=https://meme-api-swn0.onrender.com/api
```

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/dyarechuk/meme-web.git
cd meme-web
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 📡 API
This app expects a REST API with the following endpoints:

- GET /memes?sort=id&order=asc

- PATCH /memes/:id

The backend can be built using any tech (NestJS + PostgreSQL recommended) and should be hosted separately.

---

## 👨‍💻 Author

This project was created by [Dmytro Yarechuk](https://github.com/Dyarechuk).