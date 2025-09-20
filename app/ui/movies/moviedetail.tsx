"use client";

import { useSuspenseQuery } from "@apollo/client/react";
import { GET_MOVIE } from "@/app/lib/queries/movies";
import { GetMovieQuery } from "@/app/lib/definitions";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { lusitana } from "@/app/ui/fonts";
import { formatDuration } from "@/app/lib/utils";

export default function MovieDetail() {
  const params = useParams();
  const movieId = params.id as string;
  const router = useRouter();
  const { data } = useSuspenseQuery<GetMovieQuery>(GET_MOVIE, {
    variables: { id: movieId },
  });

  const handleBackClick = () => {
    router.back();
  };

  const movie = data.movie;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200 px-12 py-4">
        <button
          onClick={handleBackClick}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to Movies</span>
        </button>
      </div>
      {/* Hero Section */}
      <div className="relative h-96 bg-orange-500">
        <div className="absolute inset-0"></div>
        <div className="relative z-10 flex h-full items-center px-12">
          <div className="flex items-start space-x-8">
            {/* Movie Poster */}
            <div className="flex-shrink-0">
              <div className="relative h-80 w-60 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={movie.posterUrl || "/placeholder.png"}
                  alt={`${movie.title} poster`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Movie Info */}
            <div className="flex-1 text-white">
              <h1 className={`${lusitana.className} text-4xl font-bold mb-4`}>
                {movie.title}
              </h1>

              <div className="flex items-center space-x-6 mb-4 text-sm">
                <div className="flex items-center space-x-1">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{new Date(movie.datePublished).getFullYear()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <ClockIcon className="h-4 w-4" />
                  <span>{formatDuration(movie.duration)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <StarIcon className="h-4 w-4 text-yellow-400" />
                  <span className="font-semibold">{movie.rating}</span>
                  <span className="text-gray-300">/ {movie.bestRating}</span>
                </div>
              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.genres?.map((genre) => (
                  <span
                    key={genre?.id}
                    className="px-3 py-1 text-white text-sm rounded-full"
                  >
                    {genre?.title}
                  </span>
                ))}
              </div>

              {/* Summary */}
              <p className="text-lg leading-relaxed max-w-3xl">
                {movie.summary}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="px-12 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cast & Crew */}
            <div>
              <h2 className={`${lusitana.className} text-2xl font-bold mb-4`}>
                Cast & Crew
              </h2>

              {movie.directors?.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Directors
                  </h3>
                  <p className="text-gray-600">{movie.directors.join(", ")}</p>
                </div>
              )}

              {movie.writers?.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Writers</h3>
                  <p className="text-gray-600">{movie.writers.join(", ")}</p>
                </div>
              )}

              {movie.mainActors?.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Main Actors
                  </h3>
                  <p className="text-gray-600">{movie.mainActors.join(", ")}</p>
                </div>
              )}
            </div>

            {/* Additional Details */}
            <div>
              <h2 className={`${lusitana.className} text-2xl font-bold mb-4`}>
                Movie Details
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">
                    Release Date:
                  </span>
                  <span className="text-gray-600">
                    {new Date(movie.datePublished).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Duration:</span>
                  <span className="text-gray-600">
                    {formatDuration(movie.duration)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Rating:</span>
                  <span className="text-gray-600">
                    {movie.rating} ({movie.ratingValue}/10)
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Genres:</span>
                  <span className="text-gray-600">
                    {movie.genres?.map((g) => g?.title).join(", ")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
