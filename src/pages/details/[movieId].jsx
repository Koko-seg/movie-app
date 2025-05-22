import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getMovieById } from "@/lib/api/get-movie-id";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { CoverDe } from "@/components/detailsCom/CoverDe";

export default function Page() {
  const router = useRouter();
  const movieId = router.query.movieId;
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const data = await getMovieById(movieId);

    setMovie(data);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="w-full lg:max-w-[1278px] mx-auto">
      <Header />
      <CoverDe />
      <Footer />
    </div>
  );
}
