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

import { getLikeThis } from "@/lib/api/get-like-this";
import { useRouter } from "next/router";

const MoreLikeThisPage = () => {
  const [likeThis, setLikeThis] = useState([]);
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [totalPages, setTotalPages] = useState(0);
  const router = useRouter();
  const { movieId } = router.query;

  useEffect(() => {
    if (!movieId) return;
    const fetchMovies = async () => {
      const data = await getLikeThis(movieId);

      setLikeThis(data?.results);
      setTotalPages(data?.total_pages);
    };
    fetchMovies();
  }, [movieId]);

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
  console.log(paginations);

  return (
    <div className="w-full lg:max-w-[1278px] mx-auto">
      <Header />
      <div className="flex flex-col md:gap-[32px]">
        <h1 className=" font-semibold text-[black] ">More Like This</h1>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {likeThis?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} movieId={movie.id} />
          ))}
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
      </div>
      <Footer />
    </div>
  );
};

export default MoreLikeThisPage;
