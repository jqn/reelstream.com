import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
import { Genre } from "@/app/lib/definitions";

export function MovieCard({
  title,
  summary,
  src,
  genres,
  rating,
  duration,
}: {
  title: string;
  src: string;
  summary: string;
  rating: string;
  duration: string;
  genres: Genre[];
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg">
      <div className="h-96 w-full overflow-hidden">
        <div className="relative h-full w-full transition-all group-hover:scale-105">
          <Image
            src={src || "https://placehold.co/831x1231"}
            alt="Movie Poster"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="pb-8">
        <div className="flex px-2 py-2 text-left">
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <p
          className={`${lusitana.className} rounded-xl bg-white px-2 pb-2 text-left text-md`}
        >
          {summary}
        </p>
        <div className="px-2 py-2 text-left">
          <p className="text-sm text-gray-500">
            {genres.map((genre) => genre.title).join(", ")}
          </p>
          <p className="text-sm text-gray-500">{duration}</p>
          <p className="text-sm text-gray-500">{rating}</p>
        </div>
      </div>
    </div>
  );
}
