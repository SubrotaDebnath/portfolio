# Subrota Debnath - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features a Gruvbox color theme, clean architecture, and seamless animations.

## 🚀 Live Demo

**Production:** https://subrotadebnath.github.io/portfolio/

## ✨ Features

- ⚡ **Fast & Modern**: Built with Vite for lightning-fast development and optimized production builds
- 🎨 **Gruvbox Theme**: Beautiful, eye-friendly color scheme
- 📱 **Responsive Design**: Works perfectly on all devices
- ♿ **Accessible**: WCAG compliant with proper ARIA labels
- 🏗️ **Clean Architecture**: Domain-driven design with clear separation of concerns
- 🔒 **Type-Safe**: Full TypeScript support with strict mode
- 🎭 **Error Boundaries**: Graceful error handling
- 🎯 **SEO Optimized**: Proper meta tags and Open Graph support
- 🔄 **CI/CD**: Automated deployment with GitHub Actions

## 🛠️ Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite 7
- **Styling**: Pure CSS with CSS Variables
- **Linting**: ESLint 9
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/        # React components
│   │   ├── sections/     # Page sections (Hero, About, Projects, etc.)
│   │   ├── shared/       # Shared components (Navigation, Forms, etc.)
│   │   └── ui/           # UI components (Button, Tags, etc.)
│   ├── domain/           # Business logic layer
│   │   ├── entities/     # Domain entities
│   │   ├── interfaces/   # TypeScript interfaces
│   │   └── types.ts      # Type definitions
│   ├── infrastructure/   # External services
│   │   └── services/     # Service implementations
│   ├── usecases/         # Application use cases
│   ├── hooks/            # Custom React hooks
│   ├── App.tsx           # Main application component
│   ├── App.css           # Global styles
│   └── main.tsx          # Application entry point
├── public/               # Static assets
├── .github/
│   └── workflows/        # GitHub Actions workflows
└── dist/                 # Production build (generated)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/SubrotaDebnath/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Access at http://localhost:5173
```

### Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 📦 Deployment

This project uses GitHub Actions for automatic deployment to GitHub Pages. Every push to the `main` branch triggers:

1. Code linting
2. Production build
3. Automatic deployment to GitHub Pages

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

### Quick Deploy

```bash
# Commit and push changes
git add .
git commit -m "Your commit message"
git push origin main

# GitHub Actions will automatically deploy
```

## 🎨 Architecture

This project follows **Clean Architecture** principles:

- **Domain Layer**: Business entities and interfaces
- **Use Cases Layer**: Application-specific business rules
- **Infrastructure Layer**: External services and implementations
- **Presentation Layer**: React components and UI

### Key Features

- **Dependency Injection**: Using interfaces for loose coupling
- **Immutability**: Readonly properties in domain entities
- **Type Safety**: Strict TypeScript configuration
- **Error Handling**: React Error Boundaries
- **Form Validation**: Client-side validation with user feedback
- **Performance**: Optimized with useMemo, useCallback, and proper cleanup

## 🔧 Configuration

### Vite Configuration

The project is configured for GitHub Pages deployment in `vite.config.ts`:

```typescript
base: '/portfolio/'  // Change to '/' for root domain
```

### TypeScript

Strict mode enabled with comprehensive type checking in `tsconfig.json`

### ESLint

Modern flat config with React and TypeScript support

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

## 👤 Author

**Subrota Debnath**
- GitHub: [@SubrotaDebnath](https://github.com/SubrotaDebnath)
- LinkedIn: [Subrota Debnath](https://www.linkedin.com/in/subrotadebnath/)
- Email: developer.subrota@gmail.com

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Gruvbox](https://github.com/morhetz/gruvbox) color scheme
- Icons and fonts from various open-source projects

---

Made with ☕ and lots of code
