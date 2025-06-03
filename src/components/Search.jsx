// import Image from "next/image";
import { SearchIcon } from "lucide-react";

import React from "react";

export const SearchMovie = ({
  getMovie,
  handleChange,
  setMovie,
  filteredMovie,
}) => {
  const changeMovie = (value) => {
    setMovie(value.split(",")[0]);
    getMovie();
  };

  console.log(filteredMovie);

  return (
    <div className="absolute top-[120px] left-40 z-30">
      <div className="flex items-center w-[567px] h-80px rounded-[48px] bg-white pl-[30.52px]">
        <SearchIcon className="w-[35px] h-[35px] text-gray-500  z-30" />

        <input
          type="text"
          placeholder="Search"
          className="w-full py-4 pl-3 pr-6 text-[32px] font-bold outline-none"
          onChange={handleChange}
        />
      </div>
      {Array.isArray(filteredMovie) && filteredMovie.length > 0 && (
        <div className="w-full bg-grey-600 flex flex-col gap-[2px]">
          {filteredMovie.map((movie, index) => (
            <div
              className="cursor-pointer flex items-center gap-2 px-4 py-1 hover:bg-gray-200"
              key={index}
              onClick={() => changeMovie(movie)}
            >
              <span>{movie}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
