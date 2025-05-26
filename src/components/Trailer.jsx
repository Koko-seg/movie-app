import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { getTrailer } from "@/lib/api/get-trailer";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { Play } from "lucide-react";

export const Trailer = ({ movieId }) => {
  const [trailer, setTrailer] = useState([]);
  useEffect(() => {
    const getMovieTrailerById = async () => {
      if (!movieId) return;
      try {
        const data = await getTrailer(movieId);

        setTrailer(data.results);
      } catch (error) {
        console.error("Failed to fetch movie trailer", error);
      }
    };
    getMovieTrailerById();
  }, [movieId]);
  const movieTrailer = trailer.find(
    (video) => video.name === "Official Trailer"
  );
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="flex gap-[2px] px-[16px] py-[8px] bg-black text-[white] w-fit rounded-[6px] md:bg-white md:text-[black]"
          variant=""
        >
          <Play />
          Watch Trailer
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-fit bg-transparent border-none">
        <YouTube
          videoId={movieTrailer?.key}
          opts={{ height: "561", width: "997", playerVars: { autoplay: 1 } }}
        />
      </DialogContent>
    </Dialog>
  );
};
