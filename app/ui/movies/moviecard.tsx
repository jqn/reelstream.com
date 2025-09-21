"use client";
import Image from "next/image";
import { Genre } from "@/app/lib/definitions";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { removeDoubleQuotes } from "@/app/lib/utils";

interface MovieCardProps {
  id: string;
  title: string;
  src: string;
  summary: string;
  rating: string;
  duration: string;
  genres: Genre[];
}

export function MovieCard({
  id,
  title,
  summary,
  src,
  genres,
  rating,
  duration,
}: MovieCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleCardClick = () => {
    router.push(`/movie/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg aspect-3/2 cursor-pointer"
    >
      <div className="h-96 w-full overflow-hidden">
        <div className="relative h-full w-full transition-all group-hover:scale-105">
          {imageError ? (
            <Image
              src={"/placeholder.png"}
              alt={`${title} poster`}
              fill
              className="object-cover"
              onError={handleImageError}
              onLoad={handleImageLoad}
              priority={false}
            />
          ) : (
            <>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-orange-500"></div>
                </div>
              )}
              <Image
                src={src || "/placeholder.png"}
                alt={`${title} poster`}
                fill
                className="object-cover"
                onError={handleImageError}
                onLoad={handleImageLoad}
                priority={false}
              />
            </>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 bg-white h-[150px]">
        <div className="flex px-2 py-2 text-left">
          <h3 className="text-lg font-medium line-clamp-1">
            {removeDoubleQuotes(title)}
          </h3>
        </div>
        <p className={"px-2 line-clamp-2 text-sm"}>{summary}</p>
        <div className="px-2 py-2 text-left">
          <div className="flex items-center gap-2 justify-between">
            <p className="text-sm text-gray-500 line-clamp-1">
              {genres.map((genre) => genre.title).join(", ")}
            </p>
            <p className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs text-white font-bold p-4">
              {rating || "N/A"}
            </p>
          </div>
          <p className="text-sm text-gray-500">{duration}</p>
        </div>
      </div>
    </div>
  );
}
