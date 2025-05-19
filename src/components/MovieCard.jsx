import { Star } from "lucide-react";

export const MovieCard = () => {
  return (
    <div>
      <img
        src="/cardPic/santa.jpg"
        className="w-[158px] h-[234px] md:w-[230px] md:h-[340px]"
      />
      <div className="w-[158px] md:w-[230px] md:h-[96px] bg-[#F4F4F5] h-[76px] rounded-lg justify-between ">
        <div className="flex">
          <Star className=" text-yellow-300 fill-amber-300 w-[16px] h-[16px]" />
          <p className="text-[12px]">6.9/10</p>
        </div>
        <p className="text-[16px]">Dear Santa</p>
      </div>
    </div>
  );
};
