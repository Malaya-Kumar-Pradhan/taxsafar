# Taxsafar 🚀

**Compliance, beautifully simplified.**

Taxsafar is a modern, tech-driven Chartered Accountant (CA) consultancy platform designed to help Indian businesses manage GST, Income Tax, registrations, notices, and financial planning seamlessly.

## 🌟 Features

* **Comprehensive Services:** Return Filing, Notice Resolution, Registrations (Company, LLP, GST, MSME, Trademark), Accounting, Financial Planning, and Virtual CFO services.
* **Modern UI/UX:** Highly responsive, animated, and accessible interface built with Tailwind CSS, Framer Motion, and Radix UI.
* **Client-Side Routing:** Lightning-fast page transitions and type-safe routing using TanStack Router.
* **Secure Authentication & Database:** Integrated directly with Supabase for robust backend services, user authentication, and data management.
* **Partner Portal:** Dedicated dashboard for partners/CAs to log in and manage client requests.

## 🛠️ Tech Stack

This project leverages a cutting-edge frontend stack:

* **Framework:** [React 19](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Routing:** [@tanstack/react-router](https://tanstack.com/router/latest)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [Class Variance Authority](https://cva.style/docs) (CVA)
* **UI Components:** [Radix UI](https://www.radix-ui.com/) primitives & `shadcn/ui` patterns
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Backend as a Service:** [Supabase](https://supabase.com/)
* **Package Manager:** [Bun](https://bun.sh/)

## 📦 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
* **Node.js** (v18 or higher)
* **Bun** (Recommended package manager for this project)

### Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Malaya-Kumar-Pradhan/taxsafar.git](https://github.com/Malaya-Kumar-Pradhan/taxsafar.git)
   cd taxsafar
   ```
2. **Install dependencies:**
   ```bash
   bun install
   ```
3. **Set up Environment Variables:**
   ```bash
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. **Start the development server:**
   ```bash
   bun run dev
   ```
# 📂 Project Structure

- **/src/components** – Reusable UI components (buttons, dialogs, navbars, footers). Includes a rich set of **Radix UI primitives**.  
- **/src/routes** – File-based routing handled by **TanStack Router** (e.g., `index.tsx`, `dashboard.tsx`, `partner-login.tsx`).  
- **/src/integrations/supabase** – Supabase client initialization, authentication hooks, and generated TypeScript database types.  
- **/supabase/migrations** – SQL migration files for setting up the Supabase database schema.  
- **vercel.json** – Configuration for deploying as a Single Page Application (SPA) on Vercel.  

---

# 📜 Available Scripts

The following npm scripts are defined in the `package.json`:

- **bun run dev** – Starts the Vite development server.  
- **bun run build** – Compiles and bundles the application into the `dist` directory for production.  
- **bun run preview** – Boots up a local web server to preview your production build.  
- **bun run lint** – Runs ESLint to check for code quality and errors.  
- **bun run format** – Uses Prettier to format the codebase.  

---

# 🚀 Deployment

This project is configured as a **Single Page Application (SPA)**.  
When deploying to hosting providers like **Vercel** or **Render**, ensure that all unmatched routes are redirected to `index.html` to allow **TanStack Router** to handle navigation.

- **Vercel**: Works out of the box using the included `vercel.json` file.  
- **Render**: Add a Rewrite rule in your Render dashboard:  
  - **Source**: `/*`  
  - **Destination**: `/index.html`  
  - **Action**: Rewrite  

⚙️ Make sure to add the following environment variables before deploying:  
- `VITE_SUPABASE_URL`  
- `VITE_SUPABASE_ANON_KEY`  

---

### Built with ❤️ by **Malaya Kumar Pradhan**
