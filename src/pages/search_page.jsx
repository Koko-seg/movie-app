import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MovieCard } from "@/components/MovieCard";

import { useEffect, useState } from "react";
import { parseAsInteger, useQueryState } from "nuqs";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getSearchSection } from "@/lib/api/get-search";

import { GenreSelect } from "@/components/genre/GenreSelect";

const SearchMoviePage = () => {
  const [searchValue, setSearchValue] = useState([]);
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [totalPages, setTotalPages] = useState(0); // ene heseg dutu

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getSearchSection(page);

      setSearchValue(data?.results);
      setTotalPages(data?.total_pages);
    };
    fetchMovies();
  }, [page]);

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleSelectPage = (pageNumber) => {
    setPage(pageNumber);
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const paginations = new Array(totalPages)
    .fill(null)
    .map((_, index) => index + 1)
    .slice(0, 3);

  return (
    <div className="w-screen lg:max-w-[1800px] mx-auto flex flex-col gap-y-[20px] pl-3">
      <Header />
      {/* <div className="flex flex-col md:gap-[32px]"> */}
        <h1 className=" font-semibold text-[black] ">Search results </h1>
        <div className="flex gap-[20px]">
          <div className="flex mt-8 flex-col md:flex-row">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 ">
            {searchValue?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} movieId={movie.id} />
            ))}
          </div>
          </div>
           <div className="sm:border-1 sm:max-h-full sm:mt-32 sm:mx-5"></div>
           <div className="  hidden sm:flex flex-wrap w-[387px]">
          <GenreSelect />
          </div>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePrevPage} />
            </PaginationItem>

            {paginations.map((pageNumber) => (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  isActive={pageNumber === page}
                  onClick={() => handleSelectPage(pageNumber)}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            ))}

            {totalPages > 3 && (
              <>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink onClick={() => handleSelectPage(totalPages)}>
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            <PaginationItem>
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <div className="flex flex-wrap w-[387px] md:hidden">
          <GenreSelect />
          </div>
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default SearchMoviePage;
