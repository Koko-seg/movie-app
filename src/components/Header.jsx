import {  Film, Search } from "lucide-react";

import Link from "next/link";
import { Genres } from "./genre/Genres";
import { ModeToggle } from "./ModeToggle";
import { SearchHeader } from "./SearchHeader";


import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";

export const Header = ({ genre}) => {
const [visible, setVisible] = useState (false)


  
  return (
    <div>
      <nav className="flex md:w-full p-[20px] md:justify-between justify-between  items-center">
       
        <div className=" text-[#4338CA] gap-[20px] ">
           {!visible &&(
       
          <Link href={"/"}>
            <div className="flex gap-2"><Film />
            <b className="text-[16px]">
              <i>MovieZ</i>
            </b></div>
            
          </Link>
          )}
        </div>

        <div className=" hidden md:flex gap-[12px] flex-row">
          <Genres genre={genre} />
     
           

            <SearchHeader />
       
        </div>
         <div className="flex justify-center  pb-8 p-2">
       {!visible && (
  <Button
    variant="outline"
    size="icon"
    onClick={() => setVisible(true)}
    aria-expanded={visible}
    aria-label="Toggle search"
    className="md:hidden"
  >
    <Search className="w-4 h-4" />
  </Button>
)}

        <AnimatePresence>
          {visible && (
            <motion.div
            initial="hidden" animate="visible" exit="hidden"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute  left-20  px-3 "
            layout>
              <div className="  w-full  rounded-xl md:hidden">
                <SearchHeader />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {!visible && (
          <div className="flex items-center sm:space-x-2">
            <ModeToggle />
          </div>
        )}
        </div>
      </nav>
    </div>
  );
};
