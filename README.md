# 🚀 Abhinandan Maharana — Portfolio

A developer portfolio packed with interactive 3D animations, smooth transitions, and a space-themed aesthetic. Features a fully interactive 3D keyboard where each keycap represents a skill.

## ✨ Features

- **Interactive 3D Keyboard** — Spline-powered keyboard where each keycap reveals a skill on hover/press
- **Smooth Animations** — GSAP + Framer Motion powered scroll, hover, and reveal animations
- **Space Theme** — Floating particles on a dark canvas
- **Light & Dark Mode** — Full theme support with cheeky disclaimer toasts
- **Responsive** — Works across all screen sizes
- **Contact Form** — Email delivery via Resend

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 16, React 19, TypeScript |
| **Styling** | Tailwind CSS, Shadcn UI |
| **Animation** | GSAP, Framer Motion |
| **3D** | Spline Runtime |
| **Email** | Resend |
| **Misc** | Lenis (smooth scroll), Zod, next-themes |

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Abhi005-live/3d-portfolio.git
    cd 3d-portfolio
    ```

2. **Install dependencies:**

    ```bash
    npm install --legacy-peer-deps
    ```

3. **Set up environment variables:**

    Copy `.env.example` to `.env.local` and fill in the values:

    ```bash
    cp .env.example .env.local
    ```

    | Variable | Required | Description |
    |---|---|---|
    | `RESEND_API_KEY` | Yes | API key from [Resend](https://resend.com) for the contact form |

4. **Run the development server:**

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) ✨

## 🎨 Customization

All personal info is in [`src/data/config.ts`](src/data/config.ts).
Projects are in [`src/data/projects.tsx`](src/data/projects.tsx).
Skills and experience are in [`src/data/constants.ts`](src/data/constants.ts).

## 🚀 Deployment

Deployed on **Vercel**. To deploy your own:

1. Push your code to a GitHub repository
2. Connect the repository to [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Vercel handles the rest

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

> Built with ❤️ by [Abhinandan Maharana](https://github.com/Abhi005-live)
