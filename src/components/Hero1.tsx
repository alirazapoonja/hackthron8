import Link from "next/link";
import React from "react";
import Image from "next/image";

import { IoIosArrowRoundForward } from "react-icons/io";

export default function header() {
  return (
    <div className="bg-[#F0F2F3] flex items-center justify-center w-[1321px] h-[850px] mt-[24px] ml-[300px]">

      {/* 3 text div */}
      <div className="text-white flex flex-col margin- space-x-5 w-[1920px] md:w-[300px] lg:w-[400px]">
        
        <div className=" flex  m-10 w-[177px] h-[14px] mt-[229px] ml-[20px] text-[#272343]">WELCOME TO CHAIRY</div>
        <h1 className="flex items-center justify-center sm:text-2xl md:text-4xl lg:text-5xl font-bold  leading-snug text-[#272343]">
          Best Furniture Collection for your interior.
        </h1>
     <Link href={"#products"}
     className="flex items-center justify-center mt-[50px]  w-[171px] h-[52px] pt-[14px] pr-[24px] pb-[14px] pl-[24px] gap-2 bg-[#029FAE]"
     >
        Shop Now
        <IoIosArrowRoundForward />
     </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div className="row-span-2 items-center justify-items-end">
              <Image
                src="/chair.png"
                alt="Product Image"
                width={434}
                height={330}
                className="rounded-lg"
              />
            </div>

        
        </div>
      </div>
   
  );
}
