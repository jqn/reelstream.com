# ReelStream 🎬

A modern movie discovery platform built with Next.js 15, featuring movie browsing, search, and filtering capabilities. ReelStream uses GraphQL and Apollo Client to provide a consistent movie browsing experience with search and genre filtering.

Live at https://reelstream-com.vercel.app/

# 🚀 Next Features/Improvements

- Highlight something in your project that you thought was especially
interesting or significant to your overall implementation
  
  The error handling and search result count implementation are especially
  interesting. The search result count addresses API limitations where
  there's no total movie count property. I created a utility function that
  returns accurate counts when possible and reasonable estimates when not.
  Additionally, handling broken image URLs with placeholder images maintains
  UI consistency across all states.

- Tell us what you are most pleased or proud of with your implementation.

  I'm most proud of the MovieCard error handling for broken images, slow
  networks, and loading states. Instead of blank screens, users always get
  useful feedback. Combined with Next.js, TypeScript, Tailwind, and GraphQL,
  the project feels production-ready rather than just a demo. I'm also proud
  of maintaining best practices through separation of concerns—breaking
  larger components into smaller, logical pieces and maintaining separate API
   and UI layers for better scalability and maintainability.

- Given more time, what next feature or improvement would you like to add
to your project?

  - Advanced search with filters.
    Implementation would include:

  1. Enhanced Search Interface:
  // Advanced search component with multiple filters

  - Search by title, actor, director
  - Year range slider (1990-2024)
  - Rating filter (7+ stars, etc.)
  - Duration filter (< 90min, 90-120min, 2+ hours)
  - Sort options (newest, rating, alphabetical / requires API changes to accept a sort argument) 
  - Accurate search result count (requires API changes to return a count property)
  - Autosuggestions
  
  2. Movie Detail Pages:
  // Route: /movie/[id]
  
  - Trailer integration (YouTube API)
  - User reviews and ratings
  - "More like this" recommendations
  - Watchlist functionality
  - Favorites functionality
  
  3. URL State Management:
  // Advanced URL params for sharing filtered results
  // ?search=action&year=2020-2024&rating=8&sort=newest

  4. User accounts
  - Authentication
  - Watchlist - save for later movies
  - Recommendations based on favorites
  - Profiles with preferences (favorites, genres, etc)

  5. Movie grid image optimizations

  - Image blurring feature
  - Prefetching images at build time with getStaticProps
  - Use of a service (Cloudinary) to fetch the same images at different sizes based on display needs per page

  6. Add accessibility

  - Better keyboard navigation 
  - ARIA labels
  - Handle screen reader friendliness

  7. Add testing and monitoring

  - Add unit tests and end to end tests
  - Add error logging/monitoring in production

   Why this would be valuable:
  - Discovery: Users can find exactly what they're looking for
  - Engagement: Detail pages increase time on site
  - Shareability: Rich URLs allow sharing specific searches
  - Scalability: Prepares for features like user accounts, watchlists,
  reviews

  This would transform ReelStream from a browsing experience into a
  complete movie discovery platform.


## ✨ Features

- 🎬 **Movie Catalog** - Browse extensive movie database with detailed information
- 🔍 **Movie Search** - Find movies by title with instant results
- 🎭 **Genre Filtering** - Filter movies by genre with dropdown selection
- 🎯 **Movie Details** - Dedicated pages with cast, directors, ratings, and plot summaries
- 📄 **Pagination** - Navigate through large movie collections efficiently
- 📱 **Responsive Design** - Mobile-first design optimized for all devices
- ⚡ **Performance** - Optimized with Suspense boundaries and skeleton loading states
- 🎨 **Modern UI** - Clean interface built with Tailwind CSS and Heroicons

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Layer**: GraphQL with Apollo Client
- **Authentication**: Token-based authentication with Apollo auth links
- **UI Components**: Custom components with Heroicons
- **State Management**: Apollo Client cache and React hooks
- **Performance**: Suspense boundaries and useSuspenseQuery
- **Package Manager**: pnpm

## 📋 Prerequisites

- Node.js 18.0 or later
- pnpm (recommended) or npm
- Access to a GraphQL movie API endpoint

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone git@github.com:jqn/reelstream.com.git
cd reelstream.com
pnpm install
```

### 2. Environment Setup

Copy the environment template and configure your variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
# GraphQL API Configuration
NEXT_PUBLIC_BASE_URL="your-graphql-api-base-url"

# Authentication (if using token-based auth)
# Add any authentication tokens or API keys required by your GraphQL endpoint
```

### 3. GraphQL API Setup

Configure your GraphQL endpoint URL in the environment variables. The application expects a GraphQL API that supports:
- `movies` query with pagination and filtering
- `movie` query for individual movie details
- `genres` query for genre filtering

### 4. Run the Application

```bash
# Development server with Turbopack
pnpm dev

# Production build
pnpm build
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
app/
├── lib/                    # Core utilities and data layer
│   ├── definitions.ts      # TypeScript type definitions for GraphQL
│   ├── queries/           # GraphQL queries and mutations
│   │   ├── index.ts       # Query exports
│   │   └── movies.ts      # Movie-related queries
│   ├── auth/              # Authentication utilities
│   │   └── token-service.ts # Token management
│   └── utils.ts           # Helper functions (pagination, formatting)
├── ui/                     # Reusable UI components
│   ├── movies/            # Movie components
│   │   ├── moviecard.tsx  # Movie card component
│   │   ├── moviegrid.tsx  # Movie grid with pagination
│   │   └── moviedetail.tsx # Movie detail page
│   ├── header.tsx         # Navigation header
│   ├── search.tsx         # Search input component
│   ├── dropdown.tsx       # Genre filter dropdown
│   ├── pagination.tsx     # Pagination controls
│   └── skeletons.tsx      # Loading state components
├── movie/[id]/            # Dynamic movie detail routes
│   └── page.tsx           # Movie detail page
├── ApolloWrapper.tsx       # Apollo Client provider
├── layout.tsx             # Root layout with Apollo
├── page.tsx               # Home page
├── error.tsx              # Global error boundary
└── not-found.tsx          # 404 page
```

## 🔧 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server

## 🌐 Deployment

This application is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard (including GraphQL endpoint URL)
4. Deploy automatically on every push to tne main branch

For other platforms, ensure you have:
- Node.js 18+ runtime
- Access to a GraphQL movie API endpoint
- Environment variables configured

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [GraphQL Documentation](https://graphql.org/learn/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is a movie discovery platform built on top of modern web technologies.
