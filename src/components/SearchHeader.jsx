// import Image from "next/image";
import { getSearchSection } from "@/lib/api/get-search";
import { cn } from "@/lib/utils";

import { Input } from "./ui/input";

import React, { useEffect, useState } from "react";
import { SearchResults } from "./SearchResults";
import { Search } from "lucide-react";
import Link from "next/link";

export const SearchHeader = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getSearchMovies = async () => {
      const data = await getSearchSection(searchValue);
      setMovies(data);
    };
    getSearchMovies();
  }, [searchValue]);

  return (
    <div className="relative ">
      <div className={cn("relative text-muted-foreground", " flex justify-center w-[280px]")}>
      <Link href={`/search_page?searchValue=${searchValue}`}>
      <Search className=" h-4 absolute -translate-y-1/2 cursor-pointer  top-1/2"/>
      </Link>
        <Input
          onChange={(event) => setSearchValue(event.target.value)}
          value={searchValue}
          type="text"
          placeholder="Search..."
          className={cn("pl-[30px]", "border-none shadow-none")}
        />
      </div>
      {movies?.results?.length > 0 && (
        <SearchResults movies={movies} setSearchValue={setSearchValue} />
      )}
    </div>
  );
};
