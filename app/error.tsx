"use client";

import Link from "next/link";
import Header from "@/app/ui/header";

export default function Error() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Header />
      {/* 404 Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-24">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>

          <p className="text-lg text-gray-600 mb-8 max-w-md">
            Uh oh! We couldn't find the requested movie.
          </p>

          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Go Back
          </Link>
        </div>
      </div>
    </main>
  );
}
