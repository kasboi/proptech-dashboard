# Proptech Dashboard

A modern property technology dashboard built with Next.js, React, and TypeScript. This application provides a comprehensive interface for managing and visualizing property-related data, sales analytics, and real-time insights.

## Features

- **Sales Overview Dashboard**: Interactive charts and statistics for tracking property sales performance
- **Property Management**: Browse and manage property listings with detailed card views
- **Analytics & Reporting**: Real-time data visualization using Recharts
- **Responsive Design**: Fully responsive interface optimized for desktop and mobile devices
- **Modern UI Components**: Built with Radix UI primitives and styled with Tailwind CSS
- **Calendar Integration**: Date selection and scheduling capabilities
- **User Management**: User authentication and profile management interface
- **Budgeting Tools**: Financial planning and budgeting dialogs

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Component Library**: Radix UI
- **Charts**: Recharts
- **Icons**: Lucide React
- **Date Handling**: date-fns, react-day-picker
- **Form Validation**: Zod
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Proptech-dashboard
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

Create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Running Production Build

Start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint and auto-fix issues
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── (dashboard)/         # Dashboard route group
│   ├── globals.css          # Global styles
│   └── layout.tsx           # Root layout
├── components/              # Shared components
│   ├── layout/              # Layout components (header, navigation)
│   └── ui/                  # Reusable UI components
├── features/                # Feature-specific modules
│   └── dashboard/           # Dashboard feature
│       ├── components/      # Dashboard components
│       ├── hooks/           # Dashboard hooks
│       └── types/           # Dashboard types
├── config/                  # Configuration files
├── constants/               # Application constants
├── hooks/                   # Shared React hooks
├── lib/                     # Utility libraries
└── types/                   # Shared TypeScript types
```

## Code Quality

This project uses:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety

Run quality checks before committing:

```bash
npm run type-check
npm run lint
npm run format:check
```

## License

This project is private and proprietary.

## Author

KAS
