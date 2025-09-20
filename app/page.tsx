import { Suspense } from "react";
import { MoviesSkeleton } from "@/app/ui/skeletons";
import MovieGrid from "@/app/ui/movies/moviegrid";
import Header from "@/app/ui/header";

export default function Page() {
  return (
    <main className="w-full">
      <Header showSearchAndFilters={true} />
      <Suspense fallback={<MoviesSkeleton />}>
        <MovieGrid />
      </Suspense>
    </main>
  );
}
