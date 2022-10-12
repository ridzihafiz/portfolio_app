import React from "react";
import { FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col p-[30px] bg-[#9AD7B9] text-[#736653] overflow-hidden max-w-[500px] mx-auto">
      <h1 className="text-[36px] font-light ">Hi...</h1>

      <div className=" my-8 relative flex flex-col items-center ">
        <div className="bg-[url(./src/assets/PXL_20210807_055523022.jpeg)] w-[500px] h-[500px] rounded-full bg-cover bg-center "></div>

        <div className="border-[#736653] border-[6px] rounded-full w-[530px] h-[530px] absolute -top-[15px] "></div>
      </div>

      <h1 className="text-[36px] font-light ">
        I'm <br /> Rid Hafiz
      </h1>
      <p>React Native Developer</p>

      <Link
        to={"/biodata"}
        className="w-[80px] h-[80px] bg-[#736653] text-[#9AD7B9] rounded-full fixed -bottom-4 -right-4 flex justify-center items-center "
      >
        <FiPlay className="text-[42px]" />
      </Link>
    </div>
  );
}
