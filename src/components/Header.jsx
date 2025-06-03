import { Moon, Film } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Genres } from "./genre/Genres";
import { ModeToggle } from "./ModeToggle";
import { SearchMovie } from "./Search";

export const Header = ({
  genre,
  handleChange,
  getMovie,
  setMovie,
  filteredMovie,
}) => {
  return (
    <div>
      <nav className="flex md:w-full p-[20px] md:justify-between justify-between  items-center">
        <div className="flex justify-center text-[#4338CA] ">
          <Link href={"/"}>
            <Film />
            <b className="text-[16px]">
              <i>MovieZ</i>
            </b>
          </Link>
        </div>

        <div className=" hidden md:flex gap-[12px] flex-row">
          <Genres genre={genre} />

          <Button variant="outline">
            {/* <SearchMovie
              handleChange={handleChange}
              getMovie={getMovie}
              setMovie={setMovie}
              filteredMovie={filteredMovie}
            /> */}
            <input type="text" placeholder="Search" className="outline-none" />
          </Button>
        </div>
        <div className="flex items-center gap-[12px]">
          <Button variant="outline" className="flex md:hidden"></Button>

          {/* <Moon className="w-[12px] h-[12px]bg-white text-black dark:bg-gray-900 dark:text-white" /> */}
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};
