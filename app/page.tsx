"use client";

import { useSuspenseQuery } from "@apollo/client/react";
import { GET_MOVIES } from "@/app/lib/queries";
import { Card } from "@/app/ui/home/Card";
import { GetMoviesQuery } from "@/app/lib/definitions";
import Search from "@/app/ui/search";
import { lusitana } from "@/app/ui/fonts";
import Pagination from "@/app/ui/invoices/pagination";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { FunnelIcon, FilmIcon } from "@heroicons/react/24/solid";

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
        <button className="flex h-10 items-center rounded-lg bg-orange-500 px-4 text-sm font-medium text-white transition-colors hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
          <span className="hidden md:block">Filter By Genre</span>{" "}
          <FunnelIcon className="h-5 md:ml-2" />
        </button>
      </div>
      <div className="mt-16 grid gap-4 sm:gap-6 md:gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">
        {data.movies.nodes.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            summary={movie.summary}
            type="invoices"
            src={movie.posterUrl}
          />
        ))}
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={data.movies.pagination.totalPages} />
      </div>
    </main>
  );
}
