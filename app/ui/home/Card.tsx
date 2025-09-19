import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";

export function Card({
  title,
  summary,
  src,
}: {
  title: string;
  summary: string;
  src: string;
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
      <div className="flex px-2 py-2 text-left">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-2 pb-2 text-center text-md`}
      >
        {summary}
      </p>
    </div>
  );
}
