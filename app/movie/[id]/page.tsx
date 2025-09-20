import { Suspense } from "react";
import Header from "@/app/ui/header";
import { MovieDetailSkeleton } from "@/app/ui/skeletons";
import MovieDetail from "@/app/ui/moviedetail";

export default function MovieDetailPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<MovieDetailSkeleton />}>
        <MovieDetail />
      </Suspense>
    </>
  );
}
