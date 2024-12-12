import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdCheck } from "react-icons/md";

export default function navbar() {
  return (
   
    <header className="bg-[#272343] text-white text-sm flex justify-between  items-center w-[1920px] h-[45px] pt-[14px] pr-[300px] pb-[14px] pl-[300px]">
      {/* Free shipping Div */}
        
      <div className="flex items-center gap-[2px] justify-between">
      <MdCheck className="text-white text-1xl items-center gap-2 opacity-[70%]"/>
        <div className="text-white text-sm font-normal leading-[21px] gap-2 opacity-[70%]">
        Free shipping on all orders over $50
      </div>
     
      </div>
      {/* eng faq need help div */}
      <div className="flex items-center w-[202px] h-[17px] gap-[24px] opacity-[70%] ">
      <div className="text-white flex items-center  justify-between gap-[6px] opacity-[70%]">
        Eng
        <RiArrowDropDownLine className="gap-[6px] w-[37px] h-[17px]"/>


        <div className="w-[30px] h-[17px] text-white text-sm font-normal leading-[21px]">Faqs</div>
        <AiOutlineExclamationCircle />
        <div className=" text-white text-sm font-normal leading-[21px] justify-center items-center">Need Help</div>
    
      </div>
      </div>
      </header>
     
   

    



)
}

