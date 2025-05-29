import { getGenreName } from "@/lib/api/get-genre";
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export const GenreSelect = () => {
  const router = useRouter();
  const [genres, setGenres] = useState([]);
  const [genreIds, setGenreIds] = useState([]);

  // URL-аас genreIds-г авч state-д тохируулах
  useEffect(() => {
    if (!router.isReady) return; // router бэлэн биш байвал гарах

    if (router.query.genreIds) {
      const ids = Array.isArray(router.query.genreIds)
        ? router.query.genreIds
        : router.query.genreIds.split(",");

      // Тогтмол тоонуудын массив болгож хөрвүүлэх
      setGenreIds(ids.map((id) => Number(id)));
    } else {
      setGenreIds([]); // URL-д genreIds байхгүй бол хоосон
    }
  }, [router.isReady, router.query.genreIds]);

  // Жанруудыг серверээс авч ирэх
  useEffect(() => {
    const fetchGenres = async () => {
      const res = await getGenreName();
      setGenres(res.genres);
    };

    fetchGenres();
  }, []);

  // Toggle хийх функц
  const handleSelectGenre = (id) => {
    const newGenreIds = genreIds.includes(id)
      ? genreIds.filter((genreId) => genreId !== id)
      : [...genreIds, id];

    setGenreIds(newGenreIds);

    router.push({
      pathname: "/genre",
      query: { genreIds: newGenreIds.join(",") },
    });
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
          const isSelected = genreIds.includes(genre.id);

          return (
            <Button
              key={genre.id}
              variant={isSelected ? "primary" : "secondary"}
              className={`border-gray-400 border-[1px] rounded-full px-[10px] py-[2px] flex font-bold ${
                isSelected ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => handleSelectGenre(genre.id)}
            >
              {genre.name} <ChevronRight />
            </Button>
          );
        })}
      </div>
    </div>
  );
};
