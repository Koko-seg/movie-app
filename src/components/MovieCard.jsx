import { Star } from "lucide-react";

export const MovieCard = () => {
  return (
    <div>
      <img src="/cardPic/santa.jpg" className="w-full" />
      <div className=" p-[8px] bg-[#F4F4F5] rounded-lg ">
        <div className="flex gap-[4px] p-[8px] items-center">
          <Star className=" text-yellow-300 fill-amber-300 w-[16px] h-[16px]" />
          <p className="fon-medium text-[#09090B]">6.9/10</p>
        </div>
        <p className="font-medium text-[14px] md:text-[18px] text-[#71717A] pl-[8px]">
          Dear Santa
        </p>
      </div>
    </div>
  );
};
