"use client";

import { useRouter } from "next/navigation";
import { FilmIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import Dropdown from "@/app/ui/dropdown";

interface HeaderProps {
  showSearchAndFilters?: boolean;
}

export default function Header({ showSearchAndFilters = false }: HeaderProps) {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <div className="w-full px-12 pt-6">
      {/* Logo */}
      <button
        onClick={handleLogoClick}
        className="flex w-fit items-center justify-between hover:opacity-80 transition-opacity cursor-pointer"
      >
        <FilmIcon className="h-8 md:mr-2" />
        <h1 className={`${lusitana.className} text-2xl`}>ReelStream</h1>
      </button>

      {/* Search and Filters */}
      {showSearchAndFilters && (
        <div className="flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Search movies..." />
          <Dropdown />
        </div>
      )}
    </div>
  );
}
