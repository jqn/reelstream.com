"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSuspenseQuery } from "@apollo/client/react";
import { GET_GENRES } from "@/app/lib/queries";
import { GetGenresQuery } from "@/app/lib/definitions";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function GenreDropdown() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const selectedGenre = searchParams.get("genre");

  const { data } = useSuspenseQuery<GetGenresQuery>(GET_GENRES);
  console.log("🚀 ~ GenreDropdown ~ data:", data);

  const handleGenreSelect = (genreId: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1"); // Reset to first page when filtering

    if (genreId) {
      params.set("genre", genreId);
    } else {
      params.delete("genre");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const selectedGenreName = selectedGenre
    ? data.genres.nodes.find((genre) => genre.title === selectedGenre)?.title ||
      "Unknown Genre"
    : "All Genres";

  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-orange-400">
        {selectedGenreName}
        <ChevronDownIcon
          aria-hidden="true"
          className="-mr-1 size-5 text-white"
        />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in max-h-[80vh] overflow-y-auto"
      >
        <div className="py-1">
          <MenuItem>
            <button
              onClick={() => handleGenreSelect(null)}
              className="block w-full px-4 py-2 text-left text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
            >
              All Genres
            </button>
          </MenuItem>
          {data.genres.nodes.map((genre) => (
            <MenuItem key={genre.id}>
              <button
                onClick={() => handleGenreSelect(genre.title)}
                className="block w-full px-4 py-2 text-left text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
              >
                {genre.title}
              </button>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
