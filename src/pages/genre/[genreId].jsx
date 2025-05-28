import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { getGenreName } from "@/lib/api/get-genre";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Genres } from "@/components/detailsCom/genre/Genres";

export default function Page() {
  const [genreMovie, setGenreMovie] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const genreMovie = await getGenreName();
      console.log(genreMovie);

      setGenreMovie(genreMovie);
    };
    fetchMovies();
  }, []);

  console.log(genreMovie);

  return (
    <div className="w-full lg:max-w-[1278px] mx-auto flex flex-col gap-y-[32px]">
      <Header />
      {genreMovie.genres?.map((genre) => (
        <Genres key={genre.id} genre={genre} />
      ))}

      <div>
        <Footer />
      </div>
    </div>
  );
}
