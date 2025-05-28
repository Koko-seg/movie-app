import { ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { getGenreName } from "@/lib/api/get-genre";

export const Genres = ({ genre }) => {
  // const [genreMovie, setGenreMovie] = useState([]);
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const genreMovie = await getGenreName();
  //     console.log(genreMovie);

  //     setGenreMovie(genreMovie);
  //   };
  //   fetchMovies();
  // }, []);
  // console.log(genreMovie);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-2">
          <ChevronDown />
          Genres
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Genres</DropdownMenuLabel>
        <p>See lists of movies by genre</p>
        <DropdownMenuSeparator />
        <Link href={`/genre`}>
          <DropdownMenuItem>{genre?.name}</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
