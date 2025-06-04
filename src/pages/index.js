import { MovCarousel } from "@/components/MovCarousel";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Upcoming } from "@/components/Upcoming";
import { Popular } from "@/components/Popular";
import { TopRated } from "@/components/TopRated";
import { useState } from "react";

export default function Home() {
  return (
    <div className="w-full lg:max-w-[1800px] mx-auto">
      <Header />
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
