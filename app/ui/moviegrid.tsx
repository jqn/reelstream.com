import { useSuspenseQuery } from "@apollo/client/react";
import { GET_MOVIES } from "@/app/lib/queries";
import { GetMoviesQuery } from "@/app/lib/definitions";
import { useSearchParams } from "next/navigation";
import { lusitana } from "@/app/ui/fonts";
import { calculateMovieCount } from "@/app/lib/utils";
import { MovieCard } from "@/app/ui/moviecard";
import Pagination from "@/app/ui/pagination";
import { formatDuration } from "@/app/lib/utils";
import { Genre } from "@/app/lib/definitions";

export default function MovieGrid() {
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
    <div className="px-12 pb-12 pt-4">
      <div className="pb-4 min-h-11">
        <h2 className={`${lusitana.className} text-xl`}>
          {searchQuery
            ? `${calculateMovieCount(
                data.movies.pagination.totalPages,
                data.movies.pagination.perPage,
                data.movies.nodes.length
              )} movies found`
            : ""}
        </h2>
      </div>
      <div className="grid sm:gap-6 md:gap-2 xl:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xxl:grid-cols-13">
        {data.movies.nodes.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
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
    </div>
  );
}
