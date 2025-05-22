import { Star } from "lucide-react";

export const CoverDe = () => {
  return (
    <div>
      <div className="  flex flex-col justify-between w-full  bg-[#F4F4F5]">
        <div className=" flex  justify-between">
          <p className="text-[24px] md:text-[18px] font-semibold text-[black] pl-[20px]">
            Wicked
          </p>
          <p className="font-medium text-[#09090B]">2024.11.26 · PG · 2h 40m</p>
          <div className="flex flex-row gap-[4px] p-[8px] items-center">
            <Star className=" text-yellow-300 fill-amber-300 w-[16px] h-[16px]" />
            <p className="font-medium text-[#09090B]">8/10</p>
          </div>
        </div>
      </div>
      <img src="/cardPic/w.jpg" />
    </div>
  );
};
