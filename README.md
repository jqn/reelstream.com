# ReelStream 🎬

A modern movie rental platform built with Next.js 15, featuring movie browsing, rental management, and user accounts. ReelStream integrates with the movie API to provide up-to-date information about the latest films and classics, offering users a seamless movie rental experience.

## ✨ Features

- 🎬 **Movie Catalog** - Browse extensive movie database with detailed information
- 🔍 **Advanced Search** - Find movies by title, genre, year, or actor
- 📋 **Rental Management** - Track active rentals, return dates, and rental history
- 👤 **User Accounts** - Secure user registration and profile management
- 🎭 **Movie Details** - Rich movie information including cast, plot, ratings, and trailers
- 💳 **Rental System** - Easy movie rental with flexible rental periods
- 📱 **Responsive Design** - Mobile-first design optimized for all devices
- 🔐 **Authentication** - Secure login and user session management

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **Authentication**: NextAuth 5.0
- **Movie Data**: External Movie API integration
- **Icons**: Heroicons
- **Package Manager**: pnpm

## 📋 Prerequisites

- Node.js 18.0 or later
- pnpm (recommended) or npm
- PostgreSQL database

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
# Database Configuration
POSTGRES_URL="your-postgres-connection-string"
POSTGRES_PRISMA_URL="your-postgres-prisma-url"
POSTGRES_URL_NON_POOLING="your-non-pooling-postgres-url"
POSTGRES_USER="your-username"
POSTGRES_HOST="your-host"
POSTGRES_PASSWORD="your-password"
POSTGRES_DATABASE="your-database-name"

# Authentication
AUTH_SECRET="your-auth-secret"  # Generate with: openssl rand -base64 32
AUTH_URL="http://localhost:3000/api/auth"

# Movie API Configuration
MOVIE_API_KEY="your-movie-api-key"
MOVIE_API_BASE_URL="https://api.themoviedb.org/3"  # Example for TMDB
```

### 3. Database Setup

Set up your PostgreSQL database to store user accounts, rental history, and movie favorites. The database will store user data while movie information is fetched from the external API.

### 4. Movie API Setup

Obtain an API key from your chosen movie database provider (e.g., TMDB, OMDB) and add it to your environment variables.

### 5. Run the Application

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
│   ├── definitions.ts      # TypeScript type definitions
│   ├── data.ts            # Database queries and API calls
│   ├── movie-api.ts       # Movie API integration
│   ├── utils.ts           # Helper functions
│   └── placeholder-data.ts # Sample data
├── ui/                     # Reusable UI components
│   ├── movies/            # Movie browsing and details
│   ├── rentals/           # Rental management components
│   ├── dashboard/         # User dashboard components
│   └── auth/              # Authentication components
├── seed/                   # Database seeding
├── layout.tsx             # Root layout
└── page.tsx               # Home page
```

## 🔧 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server

## 🌐 Deployment

This application is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard (including movie API keys)
4. Deploy automatically on every push

For other platforms, ensure you have:
- Node.js 18+ runtime
- PostgreSQL database access
- Movie API access and valid API keys
- Environment variables configured

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [NextAuth Documentation](https://next-auth.js.org/)
- [The Movie Database API](https://www.themoviedb.org/documentation/api) - Popular movie API
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is a movie rental platform built with modern web technologies.
