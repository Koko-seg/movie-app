import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getMovieById } from "@/lib/api/get-movie-id";
import { Director } from "@/components/detailsCom/Director";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { CoverDe } from "@/components/detailsCom/CoverDe";
import { InfoDe } from "@/components/detailsCom/InfoDe";
import { MoreLikeThis } from "@/components/detailsCom/MoreLikeThis";
import { getLikeThis } from "@/lib/api/get-like-this";
import { getDirector } from "@/lib/api/get-director";


export default function Page() {
  const router = useRouter();
  const movieId = router.query.movieId;
  const [movie, setMovie] = useState({});
   const [likeThis, setLikeThis] = useState([]);
   const [director, setDirector] = useState({});
  

   const similar = async ()=> {
    try {
      const likeThis= await getLikeThis (movieId)
      setLikeThis (likeThis)
    } catch (error) {
      
    }
   }
   const directors = async ()=> {
    try {
      const director= await getDirector (movieId)
      setDirector (director)
    } catch (error) {
      
    }
   }

  useEffect(() => {
    if (!movieId) return;
    const getMovie = async () => {
      const data = await getMovieById(movieId);

      setMovie(data);
    };
    getMovie();
    similar()
    directors()
  }, [movieId]);
  return (
    <div className="w-full lg:max-w-[1278px] mx-auto flex flex-col gap-y-[32px]">
      <Header />
      <CoverDe movie={movie} />
      <InfoDe movie={movie} />
      <Director director={director}/>
      <MoreLikeThis likeThis={likeThis}/>
      <Footer />
    </div>
  );
}
