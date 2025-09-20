# ReelStream 🎬

A modern movie discovery platform built with Next.js 15, featuring movie browsing, search, and filtering capabilities. ReelStream uses GraphQL and Apollo Client to provide a seamless movie browsing experience with real-time search and genre filtering.

Live at https://reelstream-com.vercel.app/

# 🚀 Next Feature/Improvements

- Highlight something in your project that you thought was especially
interesting or significant to your overall implementation

  The intelligent movie count calculation with the calculateMovieCount
  utility function. It demonstrates thoughtful UX design
  
  - User-centric thinking: Instead of just showing "48 movies found" for a
  search that returns 12 results, it shows the actual count
  - Handles real-world pagination: Recognizes that the last page often has
  fewer items
  - Progressive enhancement: Provides exact data when possible, reasonable
  estimates when not

  - Reusable architecture: Clean utility function that can be used anywhere

- Tell us what you are most pleased or proud of with your implementation.
  The comprehensive error handling and state management in the MovieCard
  component.
  
  - Resilient UX: Users never see broken images or empty spaces
  - Performance conscious: Proper loading states prevent layout shifts
  - Accessible: Clear fallback states with meaningful feedback
  - Production-ready: Handles real-world scenarios like slow networks, broken
   URLs, 404s
  - Clean implementation: Uses React best practices with proper state
  management

- Given more time, what next feature or improvement would you like to add
to your project?
  - Advanced search with filters and a dedicated movie detail page.
    Implementation would include:

  1. Enhanced Search Interface:
  // Advanced search component with multiple filters

  - Search by title, actor, director
  - Year range slider (1990-2024)
  - Rating filter (7+ stars, etc.)
  - Duration filter (< 90min, 90-120min, 2+ hours)
  - Sort options (newest, rating, alphabetical)
  - Search result count
  
  2. Movie Detail Pages:
  // Route: /movie/[id]
  
  - Full cast and crew information
  - Trailer integration (YouTube API)
  - User reviews and ratings
  - "More like this" recommendations
  - Watchlist functionality
  
  3. URL State Management:
  // Advanced URL params for sharing filtered results
  // ?search=action&year=2020-2024&rating=8&sort=newest

   Why this would be valuable:
  - Discovery: Users can find exactly what they're looking for
  - Engagement: Detail pages increase time on site
  - Shareability: Rich URLs allow sharing specific searchess
  - Scalability: Prepares for features like user accounts, watchlists,
  reviews

  Technical benefits:
  - Leverages existing GraphQL infrastructure
  - Builds on current search/filter patterns
  - Uses established component architecture
  - Maintains performance with proper pagination

  This would transform ReelStream from a browsing experience into a
  comprehensive movie discovery platform.

Improve SEO
User logins


## ✨ Features

- 🎬 **Movie Catalog** - Browse extensive movie database with detailed information
- 🔍 **Real-time Search** - Find movies by title with instant results
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
4. Deploy automatically on every push

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

This project is a movie discovery platform built with modern web technologies.
