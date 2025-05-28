import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Genres } from "@/components/genre/Genres";
import { getGenreFilter } from "@/lib/api/get-filter";
import { GenreSelect } from "@/components/genre/GenreSelect";
import { MovieCard } from "@/components/MovieCard";

const GenrePage = () => {
  const router = useRouter();
  const genreName = router.query?.genreFilter;
  console.log(genreName);
  const [filterMovie, setFilterMovie] = useState({});

  useEffect(() => {
    if (!genreName) return;
    const getFilter = async () => {
      const data = await getGenreFilter(genreName);
      console.log("genre", data);

      setFilterMovie(data);
    };
    getFilter();
  }, [genreName]);

  if (!filterMovie || !filterMovie.results) return null;
  const resultMovie = filterMovie.results;
  console.log("kino", resultMovie);

  return (
    <div>
      <Header />
      <div className="w-screen md:max-w-[1800px] mx-auto pt-[52px]">
        <p className="font-semibold text-[30px]">Search Filter</p>
        <div className="w-[385px]">
          <GenreSelect />
        </div>
        <div className="p-5">
          <p> Title</p>
          <div>
            {resultMovie?.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
export default GenrePage;
