import { ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { GenreSelect } from "./GenreSelect";


export const Genres = () => {

  return (
    <div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
     <Button variant="outline">
          <ChevronDown />
          Genres
      </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-150 p-5">
   <GenreSelect/>
    </DropdownMenuContent>
    </DropdownMenu>
  
</div>
  );
};
