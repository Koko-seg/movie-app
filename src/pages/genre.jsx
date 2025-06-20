import { useState, useEffect } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { GenreSelect } from "@/components/genre/GenreSelect";
import { MovieCard } from "@/components/MovieCard";
import { getGenreFilter } from "@/lib/api/get-filter";
import { useRouter } from "next/router";
import { useQueryState, parseAsInteger } from "nuqs";
import { useSearchParams } from "next/navigation";

const GenrePage = () => {
  const router = useRouter();
  const name = useSearchParams().get("name")
  const genreId = router.query.genreIds;

  const [filterMovie, setFilterMovie] = useState(null);
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  useEffect(() => {
    if (!genreId) return;
    const getFilter = async () => {
      const data = await getGenreFilter(genreId, page);
      console.log("genre", data);

      setFilterMovie(data);
    };
    getFilter();
  }, [genreId, page]);

  const handleBackPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="w-screen lg:max-w-[1800px] mx-auto flex flex-col gap-y-[20px] pl-3">
      <Header />
      <p className="font-semibold text-[30px] ">Search Filter</p>
      <div className="flex mt-8 flex-col md:flex-row">
        <div className=" flex flex-wrap w-[387px] ">
          <GenreSelect />
        </div>
 <div className="sm:border-1 sm:max-h-full sm:mt-32 sm:mx-5"></div>
        <div className="p-5">
          <p> {filterMovie?.total_results} titles in {name} </p>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            {filterMovie?.results?.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        {page > 1 && <button onClick={handleBackPage}>back</button>}
        <button>{page}</button>
        {500 > page && <button onClick={handleNextPage}>next</button>}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default GenrePage;
