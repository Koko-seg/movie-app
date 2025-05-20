import { MovieCard } from "@/components/MovieCard";
import { MovieCarouselItem } from "@/components/MovieCarouselItem";
import { MovCarousel } from "@/components/MovCarousel";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Upcoming } from "@/components/Upcoming";
import { Popular } from "@/components/Popular";
import { TopRated } from "@/components/TopRated";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <MovCarousel />
      <Upcoming />
      <Popular />
      <TopRated />
      <Footer />
    </div>
  );
}
