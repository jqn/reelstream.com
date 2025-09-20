"use client";

import { useSuspenseQuery } from "@apollo/client/react";
import { GET_MOVIES } from "@/app/lib/queries";
import { MovieCard } from "@/app/ui/moviecard";
import { GetMoviesQuery, Genre } from "@/app/lib/definitions";
import Search from "@/app/ui/search";
import { lusitana } from "@/app/ui/fonts";
import Pagination from "@/app/ui/pagination";
import { formatDuration, calculateMovieCount } from "@/app/lib/utils";
import { useSearchParams, useRouter } from "next/navigation";
import { FilmIcon } from "@heroicons/react/24/solid";
import Dropdown from "./ui/dropdown";

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;
  const searchQuery = searchParams.get("query") || null;
  const genreFilter = searchParams.get("genre") || null;
  const perPage = 48; // Show 48 movies per page for grid layout

  const handleLogoClick = () => {
    router.push('/');
  };

  const { data } = useSuspenseQuery<GetMoviesQuery>(GET_MOVIES, {
    variables: {
      pagination: {
        perPage,
        page: currentPage,
      },
      where: {
        search: searchQuery,
        genre: genreFilter,
      },
    },
  });

  return (
    <main className="w-full p-12">
      <button
        onClick={handleLogoClick}
        className="flex w-fit items-center justify-between hover:opacity-80 transition-opacity cursor-pointer"
      >
        <FilmIcon className="h-8 md:mr-2" />
        <h1 className={`${lusitana.className} text-2xl`}>ReelStream</h1>
      </button>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search movies..." />
        <Dropdown />
      </div>
      <div className="mt-4">
        <h2 className={`${lusitana.className} text-2xl`}>
          {searchQuery
            ? `${calculateMovieCount(
                data.movies.pagination.totalPages,
                data.movies.pagination.perPage,
                data.movies.nodes.length
              )} movies found`
            : null}
        </h2>
      </div>
      <div className="mt-16 grid gap-4 sm:gap-6 md:gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">
        {data.movies.nodes.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            summary={movie.summary}
            src={movie.posterUrl}
            rating={movie.rating}
            duration={formatDuration(movie.duration)}
            genres={movie.genres as Genre[]}
          />
        ))}
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={data.movies.pagination.totalPages} />
      </div>
    </main>
  );
}
