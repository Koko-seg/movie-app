import { MovCarousel } from "@/components/MovCarousel";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Upcoming } from "@/components/Upcoming";
import { Popular } from "@/components/Popular";
import { TopRated } from "@/components/TopRated";
import { useState } from "react";

export default function Home() {
  // const [movie, setMovie] = useState("");
  // const [filteredMovie, setFilteredMovie] = useState([]);

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setMovie(value);

  //   if (!value) {
  //     setFilteredMovie([]);
  //     return;
  //   }
  //   const dummyMovies = [""];
  //   const results = dummyMovies.filter((m) =>
  //     m.toLowerCase().includes(value.toLowerCase())
  //   );

  //   setFilteredMovie(results);
  // };

  // const getMovie = () => {
  //   console.log("Selected movie:", movie);
  // };
  return (
    <div className="w-full lg:max-w-[1278px] mx-auto">
      <Header
      // handleChange={handleChange}
      // getMovie={getMovie}
      // setMovie={setMovie}
      // filteredMovie={filteredMovie}
      />
      <MovCarousel />
      <Upcoming />
      <Popular />
      <TopRated />
      <div>
        <Footer />
      </div>
    </div>
  );
}
