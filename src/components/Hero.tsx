import React from "react";




export default function navbar2() {
  return (
    
    <header className="bg-[#ffffff] text-white text-sm flex justify-between  items-center w-[1920px] h-[74px] pt-[14px] pr-[300px] pb-[14px] pl-[300px] drop-shadow-sm">
      <nav className="hidden md:flex space-x-8 items-center w-[339px] h-[15px] gap-[32px]">
        <a href="#" className="text-[#007580]">
          Home
        </a>
        <a href="#" className="text-[#636270]">
          Shop
        </a>
        <a href="#" className="text-[#636270]">
          Product
        </a>
        <a href="#" className="text-[#636270]">
          Pages
        </a>
        <a href="#" className="text-[#636270]">
          About
        </a>
        
      </nav>
      <div className="hidden md:flex space-x-8 items-center">
        <a href="#" className="text-[#636270] w-[57px] h-[15px] font-normal">Contact</a>
        <a href="#" className="text-[#272343] w-[103px] h-[15px] font-normal">(808) 555-0111</a>
        </div>
    </header>
  );
}
