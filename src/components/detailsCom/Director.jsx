import { getMoreInfo } from "@/lib/api/get-more-info";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getDirector } from "@/lib/api/get-director";

export const Director = ({ id }) => {
  const [director, setDirector] = useState([]);
  useEffect(() => {
    if (!id) return;
    const director = async () => {
      const data = await getDirector(id);
      console.log(data);
      setDirector(data);
    };

    director();
  }, [id]);

  return (
    <div className="flex-col  flex gap-y-[33px]  divide-y">
      <div className="flex px-[20px] gap-13">
        <p className="text-[16px] font-bold w-[64px]">Director</p>
        <p className="text-[16px]">Jon M. Chu</p>
      </div>
      <div className="flex px-[20px] gap-13">
        <p className="text-[16px] font-bold w-[64px]">Writers</p>
        <p className="text-[16px]">
          Winnie Holzman · Dana Fox · Gregory Maguire
        </p>
      </div>
      <div className="flex px-[20px] gap-13">
        <p className="text-[16px] font-bold w-[64px]">Stars</p>
        <p className="text-[16px]">
          Cynthia Erivo · Ariana Grande · Jeff Goldblum
        </p>
      </div>
    </div>
  );
};
