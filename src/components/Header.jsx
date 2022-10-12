import React from "react";

export default function Header({ title }) {
  return (
    <div className="w-full px-[30px] flex items-center bg-[#736653] h-[50px] fixed top-0 left-0 z-[100]">
      <h1 className="text-[16px] font-bold text-[#9AD7B9] capitalize">
        {title}
      </h1>
    </div>
  );
}
