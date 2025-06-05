// import Image from "next/image";
import { getSearchSection } from "@/lib/api/get-search";
import { cn } from "@/lib/utils";

import { Input } from "./ui/input";

import React, { useEffect, useState } from "react";
import { SearchResults } from "./SearchResults";

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
    <div className="relative">
      <Input
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
        type="text"
        placeholder="Search..."
        className={cn("pl-[38px]", "border-none shadow-none")}
      />
      {movies?.results?.length > 0 && (
        <SearchResults movies={movies} setSearchValue={setSearchValue} />
      )}
    </div>
  );
};
