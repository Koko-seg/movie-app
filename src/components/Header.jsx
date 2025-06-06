import { Moon, Film, Search } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Genres } from "./genre/Genres";
import { ModeToggle } from "./ModeToggle";
import { SearchHeader } from "./SearchHeader";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";

export const Header = ({ genre, id }) => {
  const router = useRouter();
  const searchClick = () => {
    setSearchValue("");
    router.push(`/details/${id}`);
  };
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
          <div className={cn("relative text-muted-foreground", "w-[379px]")}>
            <Search
              size={16}
              className="absolute -translate-y-1/2 cursor-pointer left-3 top-1/2"
              onClick={searchClick}
            />

            <SearchHeader />
          </div>
        </div>
        <div className="flex items-center gap-[12px]">
          <Button variant="outline" className="flex md:hidden">
            <Search />
          </Button>

          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};
