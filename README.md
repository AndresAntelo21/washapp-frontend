React Frontend Template

This repository is a frontend starter template built with modern technologies for React applications. It provides a scalable and flexible foundation for building web applications using Vite, TypeScript, and a curated set of tools that enhance development experience and code quality.

Features

This template includes:

Core

React — Component-based UI library
Vite — Fast development server and build tool
TypeScript — Static typing for safer code

Styling

Tailwind CSS v4 — Utility-first CSS framework for styling
Shadcn UI — Customizable UI components built on top of Tailwind CSS

Routing

Wouter — Lightweight router for client-side navigation

State & Data

Zustand — Simple global state management
TanStack Query — Data fetching and cache management

Forms & UI Utilities

React Hook Form — Declarative form handling
React Icons — Popular icon set for React
Sonner — Toast notifications
Motion — Animation library
DnDKit — Drag-and-drop utilities

Internationalization

React i18next — Internationalization support

Testing

Vitest — Test runner
React Testing Library — Testing utilities for React components

Code Quality

ESLint — Linting for code quality
Prettier — Code formatting
Automatic sorting and validation of Tailwind CSS classes

Installation

Clone the repository:

git clone <your-repo-url>

Navigate into the project folder:

cd <project-folder>

Install dependencies:

npm install

Environment Variables

Create a .env file based on .env.example to define any environment variables needed for your project.

Example:

VITE_API_URL=https://api.example.com

Available Scripts

The following scripts are available:

npm run dev — Start development server
npm run build — Build production bundle
npm run preview — Preview production build
npm run lint — Run ESLint
npm run lint:fix — Run ESLint and fix issues
npm run format — Run Prettier to format code
npm run test — Run tests once
npm run test:watch — Run tests in watch mode
npm run test:ui — Run Vitest UI

Project Structure

src/
├─ app/
│   ├─ router.tsx           // Application routes
│   ├─ providers.tsx        // Providers for global context
│   ├─ queryClient.ts       // React Query client
│   └─ i18n.ts              // Internationalization config
├─ components/
│   └─ ui/                  // Shared UI components (Shadcn UI)
├─ pages/                   // Page components
├─ services/                // API service utilities
├─ store/                   // Global state (Zustand stores)
├─ hooks/                   // Custom React hooks
├─ utils/                   // Utility functions
├─ styles/                  // Tailwind/global styles
├─ main.tsx                 // Application entry point
├─ setupTests.ts            // Testing setup
└─ vitest.config.ts         // Vitest configuration

Styling

Tailwind CSS v4 is installed and configured with its Vite plugin. All Tailwind classes are automatically sorted and validated using ESLint and Prettier plugins.

Routing

Client-side navigation is handled using Wouter. Routes are defined in src/app/router.tsx.

UI Components

Shadcn UI components are stored under src/components/ui/. Customize these components to suit your design system.

State Management

Global state is managed using Zustand. Example stores are located in src/store/.

Data Fetching

TanStack Query is configured to manage server state and API requests.

Testing

Testing is configured with Vitest and React Testing Library. Tests are located alongside the code or in __tests__ folders. The configuration in vitest.config.ts ensures a DOM-like environment using jsdom.

Code Quality

ESLint and Prettier are configured to enforce code quality and formatting standards. Tailwind class sorting and unknown class detection are enabled.

Contributing

Contributions are welcome. When contributing, please follow the existing code style and include tests for any new functionality.
