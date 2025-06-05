import { Moon, Film } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Genres } from "./genre/Genres";
import { ModeToggle } from "./ModeToggle";
import { SearchHeader } from "./SearchHeader";

export const Header = ({ genre }) => {
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

          <SearchHeader />
        </div>
        <div className="flex items-center gap-[12px]">
          <Button variant="outline" className="flex md:hidden"></Button>

          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};
