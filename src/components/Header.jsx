import { Search, Moon, Film, ChevronDown} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";



export const Header = () => {
  return (
    <div>
      <nav className="flex justify-between  h-[59px] items-center">
        <div className="flex justify-center text-[#4338CA] ">
          <Film />
          <b className="text-[16px"><i>MovieZ</i></b>
        </div>
      
        <div className="invisible md:visible flex gap-[12px] ">
           <Button variant="outline"><ChevronDown/>Genre</Button>
           <div className="relative flex items-center justify-between">
         <Search className="absolute"/>
             <Input type="text" placeholder="Search"/>
             </div>
        </div>
        <div className="flex items-center gap-[12px]"> 
          

          <Button variant="outline" className="visible sm:invisible"><Search/></Button>
           
          <Button variant="outline"><Moon className="w-[12px] h-[12px]bg-white text-black dark:bg-gray-900 dark:text-white" /></Button>
           </div>
        
      </nav>
    </div>
  );
};
//  className="w-[12px] h-[12px]" 