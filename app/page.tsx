"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { MoviesSkeleton } from "@/app/ui/skeletons";
import MovieGrid from "@/app/ui/moviegrid";
import Header from "@/app/ui/header";

export default function Page() {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const searchQuery = searchParams.get("query") || null;
  const genreFilter = searchParams.get("genre") || null;

  // Create a key that changes when filters change to force Suspense to show skeleton
  const suspenseKey = `${currentPage}-${searchQuery || "all"}-${
    genreFilter || "all"
  }`;

  return (
    <main className="w-full">
      <Header showSearchAndFilters={true} />
      <Suspense key={suspenseKey} fallback={<MoviesSkeleton />}>
        <MovieGrid />
      </Suspense>
    </main>
  );
}
