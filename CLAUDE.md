# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal portfolio website built with React, TypeScript, and Vite following Clean Architecture principles. The codebase uses a domain-driven design with clear separation between business logic, use cases, infrastructure, and presentation layers.

## Development Commands

```bash
# Development
npm run dev              # Start dev server at http://localhost:5173

# Building
npm run build            # TypeScript compilation + Vite build
npm run preview          # Preview production build at http://localhost:4173

# Code Quality
npm run lint             # Run ESLint
```

## Architecture

The codebase follows **Clean Architecture** with strict dependency inversion:

### Layer Structure

```
src/
├── domain/              # Core business layer (no dependencies)
│   ├── entities/        # Domain entities (BlogPost, Project, ContactMessage)
│   ├── interfaces/      # Service interfaces (I* prefix)
│   └── types.ts         # Type definitions and prop types
├── usecases/            # Application business rules
│   ├── ContactUseCase.ts
│   └── NavigationUseCase.ts
├── infrastructure/      # External concerns & implementations
│   └── services/
│       ├── DataService.ts          # Data retrieval implementation
│       └── NotificationService.ts  # Notification implementation
├── components/          # Presentation layer
│   ├── sections/        # Page sections (Hero, About, Projects, Blog, Contact, Footer)
│   ├── shared/          # Shared components (Navigation, ContactForm, etc.)
│   └── ui/              # Reusable UI components (Button, Tags, ErrorBoundary, etc.)
├── hooks/               # Custom React hooks
│   ├── useNavigation.ts
│   ├── useIntersectionObserver.ts
│   └── useTypingEffect.ts
├── App.tsx              # Root component with dependency injection
└── main.tsx             # Entry point
```

### Dependency Flow

- **Domain layer** has no dependencies (pure business logic)
- **Use cases** depend only on domain interfaces
- **Infrastructure** implements domain interfaces
- **Components** receive dependencies via props (DI pattern)
- **App.tsx** acts as composition root, instantiating services and wiring dependencies

### Key Patterns

1. **Interface-based design**: All services use interfaces (IDataService, INotificationService, IContactUseCase) from domain/interfaces/
2. **Dependency injection**: Services are instantiated in App.tsx and passed down through props
3. **Immutable entities**: Domain entities use `readonly` properties
4. **Type safety**: Strict TypeScript mode enabled with comprehensive type checking

## TypeScript Configuration

- **Strict mode enabled** with additional checks:
  - `noUnusedLocals`, `noUnusedParameters`
  - `noFallthroughCasesInSwitch`
  - `noUncheckedSideEffectImports`
- **Module resolution**: bundler mode for Vite
- Separate configs for app (`tsconfig.app.json`) and build tools (`tsconfig.node.json`)

## Styling

- Pure CSS with CSS Variables (no CSS-in-JS libraries)
- Gruvbox color theme defined in App.css
- Component-scoped styles follow BEM-like naming

## Environment Variables

The project uses environment variables for EmailJS configuration:

- `VITE_EMAILJS_SERVICE_ID` - EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID` - EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY` - EmailJS public key

**Local Development:**
1. Copy `.env.example` to `.env`
2. Fill in your EmailJS credentials
3. The `.env` file is gitignored and will not be committed

**Production (GitHub Actions):**
Environment variables are set as GitHub Secrets and injected during build. See GitHub Actions workflow configuration in `.github/workflows/deploy.yml`.

## Deployment

Automated via GitHub Actions on push to `main`:
1. Lint code
2. Build project (with environment variables from GitHub Secrets)
3. Deploy to GitHub Pages

**Important**: The `base` property in `vite.config.ts` is set to `'/'` for root domain deployment. Change to `'/portfolio/'` if deploying to a subdirectory.

**Setting up GitHub Secrets:**
1. Go to repository Settings → Secrets and variables → Actions
2. Add the following secrets:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

Manual deployment scripts available:
- `./deploy-to-root.sh` - Deploy to root domain
- `./manual-deploy.sh` - Manual deployment script

## Common Workflows

### Adding a New Section Component

1. Create component in `src/components/sections/`
2. Define prop types in `src/domain/types.ts`
3. Import and add to `App.tsx`
4. Implement with proper TypeScript types

### Adding a New Service

1. Define interface in `src/domain/interfaces/I*.ts`
2. Implement in `src/infrastructure/services/*.ts`
3. Instantiate in `App.tsx` with proper dependency injection
4. Pass to components via props

### Modifying Domain Logic

1. Update entities in `src/domain/entities/` (maintain immutability)
2. Update interfaces if service contracts change
3. Update implementations in infrastructure and usecases
4. Verify type safety across the codebase

## Testing & Validation

- ESLint configured with React Hooks and TypeScript rules
- Build command runs TypeScript compiler before Vite build
- Pre-deployment linting in CI/CD pipeline

## Notes

- No test framework currently configured
- Form validation handled in ContactForm component with client-side checks
- Error boundaries implemented for graceful error handling
- React 19 with modern hooks (useMemo, useCallback for optimization)
- Custom hooks for intersection observer, navigation, and typing effects
- Contact form uses EmailJS for email delivery (200 emails/month on free tier)
- EmailJS credentials stored in environment variables for configuration management