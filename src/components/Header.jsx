import { Search, Moon, Film } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Genres } from "./genre/Genres";

export const Header = ({ genre }) => {
  return (
    <div>
      <nav className="flex md:w-full p-[20px] md:justify-between justify-between  items-center">
        <div className="flex justify-center text-[#4338CA] ">
          <Link href={"/"}>
            <Film />
            <b className="text-[16px">
              <i>MovieZ</i>
            </b>
          </Link>
        </div>

        <div className="hidden md:flex gap-[12px] ">
          <Genres genre={genre} />

          <Button variant="outline">
            <Search />
            <input type="text" placeholder="Search" className="outline-none" />
          </Button>
        </div>
        <div className="flex items-center gap-[12px]">
          <Button variant="outline" className="flex md:hidden">
            <Search />
          </Button>

          <Button variant="outline">
            <Moon className="w-[12px] h-[12px]bg-white text-black dark:bg-gray-900 dark:text-white" />
          </Button>
        </div>
      </nav>
    </div>
  );
};
