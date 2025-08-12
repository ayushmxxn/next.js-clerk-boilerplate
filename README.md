# Next.js + Clerk Auth Boilerplate

This is a ready to go Next.js 14 starter with Clerk authentication and dark mode support.

## ✨ What's Inside

- **Clerk Authentication** – Fully set up sign-up and sign-in pages
- **Dark Mode** – Auto-detects system theme + easy toggle
- **Protected Routes** – Middleware protected dashboard and private pages out of the box

## 🛠 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/ayushmxxn/next.js-clerk-boilerplate.git
cd my-app
```

### 2. Install packages

```bash
npm install
```

### 3. Add your environment variables

Grab these from your Clerk dashboard.
Create a `.env.local` file in your project root and add:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

### 4. Run the app

```bash
npm run dev
```

## 📂 Folder Layout

```
src/
├── app/
│   ├── dashboard/    # Dashboard pages
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/       # Reusable components
│   ├── landing/     # Landing page
│   ├── layout/      # Layout components
│   ├── ui/          # UI elements
│   └── wrappers/    # Higher-order components
├── lib/
│   ├── utils.ts
│   └── middleware.ts  # Auth checks
```

## Authentication

- Middleware in `middleware.ts` protects your routes
- Protected by default: `/dashboard/*`
- Public routes: Homepage + auth pages

## Dark Mode

- Auto-switches based on system theme
- You can toggle manually
- Remembers your choice

## Tech Stack

- Next.js 14
- Clerk
- Tailwind CSS
- TypeScript
- next-themes

## License

Licensed under the [MIT license](./LICENSE).
