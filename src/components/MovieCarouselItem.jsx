import { Star, Play } from "lucide-react";
import { Button } from "./ui/button";

export const MovieCarouselItem = (props) => {
  return (
    <div className="relative">
      <img
        src="/cardPic/wicked.jpg"
        className="w-screen min-h-[246px] md:max-h-[600px] "
      />
      <div className="flex flex-col gap-[16px] m-[20px] md:absolute top-[178px] left-[120px] md:text-[white]  md:w-[404px]">
        <div className="flex w-[335px] h-[52px] justify-between items-center">
          <div>
            <p className="font-normal text-[14px]"> {props.text}Now Playing:</p>
            <p className="font-semibold text-[24px]">{props.title}Wicked</p>
          </div>
          <div className="flex gap-[4px] ">
            <Star className=" text-yellow-300 fill-amber-300 w-[16px] h-[16px]" />
            <div className="flex">
              <p className="text-[18px]  font-semibold text-[black] md:text-[white]">
                6.9
              </p>
              <p className="text-[18px] font-medium text-grey-400">/10</p>
            </div>
          </div>
        </div>

        <p className="text-[12px] w-full">
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.
        </p>
        {/* <Button variant="outline" className="flex  md:bg-white md:text-[black]">
          <Play /> Watch Trailer
        </Button> */}
        <button className="flex gap-[2px] px-[16px] py-[8px] bg-black text-[white] w-fit rounded-[6px] md:bg-white md:text-[black]">
          <Play /> Watch Trailer
        </button>
      </div>
    </div>
  );
};
