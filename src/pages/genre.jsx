import { useState, useEffect } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { GenreSelect } from "@/components/genre/GenreSelect";
import { MovieCard } from "@/components/MovieCard";
import { getGenreFilter } from "@/lib/api/get-filter";
import { useRouter } from "next/router";

const GenrePage = () => {
  const router = useRouter();
  const genreId = router.query.genreIds;

  console.log(genreId);
  const [filterMovie, setFilterMovie] = useState({});

  useEffect(() => {
    if (!genreId) return;
    const getFilter = async () => {
      const data = await getGenreFilter(genreId);
      console.log("genre", data);

      setFilterMovie(data);
    };
    getFilter();
  }, [genreId]);

  if (!filterMovie || !filterMovie.results) return null;
  const resultMovie = filterMovie.results;
  console.log("kino", resultMovie);

  return (
    <div>
      <Header />
      <div className="w-screen md:max-w-[1800px] mx-auto pt-[52px]">
        <p className="font-semibold text-[30px]">Search Filter</p>
        <div className="flex pt-8 gap-10 ">
          <div className=" flex flex-wrap">
            <GenreSelect />
          </div>

          <div className="p-5">
            <p> Title </p>
            <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4  gap-8">
              {resultMovie?.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>
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
