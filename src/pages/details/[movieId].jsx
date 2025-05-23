import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getMovieById } from "@/lib/api/get-movie-id";
import { Director } from "@/components/detailsCom/Director";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { CoverDe } from "@/components/detailsCom/CoverDe";
import { InfoDe } from "@/components/detailsCom/InfoDe";
import { MoreDetails } from "@/components/detailsCom/MoreDetails";

export default function Page() {
  const router = useRouter();
  const movieId = router.query.movieId;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (!movieId) return;
    const getMovie = async () => {
      const data = await getMovieById(movieId);

      setMovie(data);
    };
    getMovie();
  }, [movieId]);
  return (
    <div className="w-full lg:max-w-[1278px] mx-auto flex flex-col gap-y-[32px]">
      <Header />
      <CoverDe movie={movie} />
      <InfoDe movie={movie} />
      <MoreDetails />
      <Footer />
    </div>
  );
}
