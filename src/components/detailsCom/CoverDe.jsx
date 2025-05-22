import { Star , Play} from "lucide-react";
import { Button } from "../ui/button";

export const CoverDe = () => {
  return (
    <div className="relative">
      
        <div className=" flex  justify-between">
          <div className="flex flex-col pl-[20px]">
          <p className="text-[24px] md:text-[18px] font-semibold text-[black] ]">
            Wicked
          </p>
          <p className="font-medium text-[#09090B]">2024.11.26 · PG · 2h 40m</p>
          </div>
          <div className="flex gap-[4px] p-[8px] items-center">
            <div className="flex flex-col">
            <p className="text-[12px]">Rating</p>
            <div className="flex flex-row">
            <Star className=" text-yellow-300 fill-amber-300 w-[28px] h-[28px]" />
               <p className="text-[16px]  font-semibold text-[black] md:text-[white]">
              8
              </p>
            <p className="font-medium text-[12px]text-[#09090B]">/10</p>
            </div>
            <p className="font-medium text-[12px] text-[#71717A]">37K</p>
            </div>
          </div>
        </div>
    <div className="flex flex-row gap-[32px]">
      <img src="/cardPic/longw.jpg" className="hidden sm:flex min-h-[246px] md:max-h-[600px] " />
      <div className="flex relative">
      <img src="/cardPic/w.jpg"  className="w-screen min-h-[246px] md:max-h-[600px] md:relative object-cover lg:object-top"/>
      <div className="absolute flex items-center top-[80%] pl-[12px] text-[white]">
      <Button variant="secondary" className="rounded-[50px]"><Play/></Button>
      <p className="text-[16px] text-[white]">Play Trailer</p>
      </div>
      </div>
      </div>
    </div>
  );
};
