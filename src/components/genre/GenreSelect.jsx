import { getGenreName } from "@/lib/api/get-genre";
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { parseAsArrayOf, parseAsInteger, useQueryState } from "nuqs";

export const GenreSelect = () => {
  const router = useRouter();

  const [genres, setGenres] = useState([]);

  const [genreIds, setGenreIds] = useQueryState(
    "genreIds",
    parseAsArrayOf(parseAsInteger).withDefault([])
  );
  console.log("mmm", genreIds);
  const [genreName, setGenreName] = useQueryState(
    "genreIds",
    parseAsArrayOf(parseAsInteger).withDefault([])
  );

  useEffect(() => {
    const fetchGenres = async () => {
      const genreZ = await getGenreName();
      setGenres(genreZ.genres);
    };

    fetchGenres();
  }, []);

  const handleSelectGenre = (genreId, name) => {
    const newGenreIds = genreIds?.includes(genreId)
      ? genreIds?.filter((t) => t !== genreId)
      : [...genreIds, genreId];

    setGenreIds(newGenreIds);
    const newNames = genreName?.includes(name)
      ? genreName?.filter((t) => t !== name)
      : [...genreName, name];

    setGenreName(newNames);
    router.push(`/genre?genreIds=${newGenreIds}&name=${newNames}`);
  };
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
        {genres.map((genre) => {
          const isSelected = genreIds?.includes(genre.id, genre.name);

          return (
            <Button
              key={genre.id}
              variant={isSelected ? "primary" : "secondary"}
              className={`border-gray-400 border-[1px] rounded-full px-[10px] py-[2px] flex font-bold ${
                isSelected ? "bg-black text-white" : "bg-white"
              }`}
              onClick={() => handleSelectGenre(genre.id)}
            >
              {genre?.name} <ChevronRight />
            </Button>
          );
        })}
      </div>
    </div>
  );
};
