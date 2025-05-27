import { ArrowRight } from "lucide-react";
import { MovieCard } from "@/components/MovieCard";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { getUpcomingMovies } from "@/lib/api/get-upcoming-movie";
import Link from "next/link";

export const Upcoming = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const upcomingMovies = await getUpcomingMovies();

      const firstTenMovies = upcomingMovies.results?.slice(0, 10);

      setUpcomingMovies(firstTenMovies);
    };
    fetchMovies();
  }, []);

  return (
    <div className="flex flex-col gap-8 p-5 md:px-20 ">
      <div className="flex justify-between md:gap-[32px]">
        <h1 className=" font-semibold text-[black] ">Upcoming</h1>
        <Link href={`/upcoming`}>
          <Button variant="ghost">
            See more <ArrowRight className="w-[16px] h-[16px]" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-8">
        {upcomingMovies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} movieId={movie.id} />
        ))}
      </div>
    </div>
  );
};
