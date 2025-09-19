"use client";

import { useSuspenseQuery } from "@apollo/client/react";
import { GET_MOVIES } from "@/app/lib/queries";
import { MovieCard } from "@/app/ui/home/moviecard";
import { GetMoviesQuery, Genre } from "@/app/lib/definitions";
import Search from "@/app/ui/search";
import { lusitana } from "@/app/ui/fonts";
import Pagination from "@/app/ui/invoices/pagination";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { FilmIcon } from "@heroicons/react/24/solid";
import Dropdown from "./ui/dropdown";

export default function Page() {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const searchQuery = searchParams.get("query") || null;
  const genreFilter = searchParams.get("genre") || null;
  const perPage = 48; // Show 48 movies per page for grid layout

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
      <Link href="/" className="flex w-fit items-center justify-between">
        <FilmIcon className="h-8 md:mr-2" />
        <h1 className={`${lusitana.className} text-2xl`}>ReelStream</h1>
      </Link>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search movies..." />
        <Dropdown />
      </div>
      <div className="mt-4">
        <h2 className={`${lusitana.className} text-2xl`}>
          {searchQuery
            ? `${
                data.movies.pagination.totalPages *
                data.movies.pagination.perPage
              } movies found`
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
            duration={movie.duration}
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
