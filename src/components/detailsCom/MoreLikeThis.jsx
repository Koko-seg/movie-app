import { ArrowRight } from "lucide-react";
import { MovieCard } from "@/components/MovieCard";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { getLikeThis } from "@/lib/api/get-like-this";

export const MoreLikeThis = ({ movieId }) => {
  const [likeThis, setLikeThis] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const similar = async () => {
      const data = await getLikeThis(movieId);

      setLikeThis(data);
    };
    similar();
  }, [movieId]);

  return (
    <div className="flex flex-col gap-8 p-5 md:px-20 ">
      <div className="flex justify-between md:gap-[32px]">
        <h1 className=" font-semibold text-[black] ">More Like This</h1>
        <Button variant="ghost">
          See more <ArrowRight className="w-[16px] h-[16px]" />
        </Button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-8">
        {likeThis?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} movieId={movie.id} />
        ))}
      </div>
    </div>
  );
};
