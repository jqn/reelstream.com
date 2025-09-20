interface MoviesGridSkeletonProps {
  length: number;
}
// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function MovieCardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-lg border bg-background aspect-3/2`}
    >
      <div className="h-96 w-full overflow-hidden">
        <div className="relative h-full w-full bg-gray-200"></div>
      </div>
      <div className="absolute bottom-0 bg-white h-[150px] w-full">
        <div className="flex px-2 py-2 text-left">
          <div className="h-6 w-32 rounded-md bg-gray-200"></div>
        </div>
        <div className="px-2">
          <div className="h-4 w-full rounded-md bg-gray-200 mb-1"></div>
          <div className="h-4 w-3/4 rounded-md bg-gray-200"></div>
        </div>
        <div className="px-2 py-2 text-left">
          <div className="flex items-center gap-2 justify-between">
            <div className="h-4 w-24 rounded-md bg-gray-200"></div>
            <div className="h-6 w-6 rounded-full bg-gray-200"></div>
          </div>
          <div className="h-4 w-16 rounded-md bg-gray-200 mt-1"></div>
        </div>
      </div>
    </div>
  );
}

export function MoviesGridSkeleton({ length }: MoviesGridSkeletonProps) {
  return (
    <div className="grid sm:gap-6 md:gap-2 xl:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xxl:grid-cols-13">
      {Array.from({ length: length }, (_, i) => (
        <MovieCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function MoviesSkeleton() {
  return (
    <div className="px-12 pt-14 mt-1">
      {/* Movies Grid */}
      <MoviesGridSkeleton length={48} />
      {/* Pagination */}
      <div className="mt-5 flex w-full justify-center">
        <div className="flex gap-2">
          <div className="h-10 w-10 rounded-md bg-gray-200"></div>
          <div className="h-10 w-10 rounded-md bg-gray-200"></div>
          <div className="h-10 w-10 rounded-md bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}

export function MovieDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 pt-14">
      {/* Hero Section Skeleton */}
      <div className="relative h-96 bg-gray-200 animate-pulse">
        <div className="flex h-full items-center px-12">
          <div className="flex items-start space-x-8">
            <div className="h-80 w-60 bg-gray-300 rounded-lg"></div>
            <div className="flex-1 space-y-4">
              <div className="h-10 w-3/4 bg-gray-300 rounded"></div>
              <div className="flex space-x-4">
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
              </div>
              <div className="flex space-x-2">
                <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
                <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
                <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section Skeleton */}
      <div className="px-12 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="h-8 w-48 bg-gray-300 rounded animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
                <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-8 w-48 bg-gray-300 rounded animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
                <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
