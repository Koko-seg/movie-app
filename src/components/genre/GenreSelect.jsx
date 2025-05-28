import { getGenreName } from "@/lib/api/get-genre";
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";

export const GenreSelect = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const movies = await getGenreName();
      const genreMovie = movies.genres;

      setGenres(genreMovie);
    };
    getGenres();
  }, []);

  return (
    <div>
      <DropdownMenuLabel className="font-bold text-[24px]">
        Genres
      </DropdownMenuLabel>
      <DropdownMenuLabel className="pb-5">
        See lists of movies by genre
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <div className="flex gap-3 flex-wrap font-bold pt-5">
        {genres?.map((movie) => (
          <Link href={`genre/${movie.id}`}>
            <Button
              movie={movie}
              variant="secondary"
              className="border-gray-400 border-[1px] rounded-full px-[10px] py-[2px] flex bg-white font-bold"
            >
              {movie.name} <ChevronRight />
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};
