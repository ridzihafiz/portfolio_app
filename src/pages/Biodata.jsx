import React from "react";
import BiodataCard from "../components/BiodataCard";
import Header from "../components/Header";
import {
  FiHome,
  FiUser,
  FiPhone,
  FiMail,
  FiLinkedin,
  FiMap,
  FiChevronRight,
} from "react-icons/fi";
import dataBio from "../constants/dataBio";
import ModalMenu from "../components/ModalMenu";

const handleIcon = (name) => {
  switch (name) {
    case "phone":
      return <FiPhone />;

    case "email":
      return <FiMail />;

    case "linkedin":
      return <FiLinkedin />;

    case "map":
      return <FiMap />;

    default:
      return <FiChevronRight />;
  }
};

export default function Biodata() {
  console.log(dataBio);

  return (
    <div className="w-screen min-h-screen flex flex-col p-[30px] bg-[#9AD7B9] text-[#736653] overflow-hidden max-w-[500px] mx-auto">
      <Header title={"Biodata"} />

      <div className="mt-[50px] flex flex-col justify-center items-center relative">
        <img
          src="./src/assets/PXL_20210807_055523022.jpeg"
          alt=""
          className="rounded-full w-[200px] h-[200px] object-cover"
        />

        <div className="w-[220px] h-[220px] border-[3px] border-[#736653] rounded-full border-dashed absolute "></div>
      </div>

      <div className="flex flex-col gap-10 mt-6 mb-[100px]">
        {dataBio.map((item) => {
          return (
            <BiodataCard
              label={item.label}
              value={item.value}
              icons={item.icons && handleIcon(item.icons)}
              link={item.link}
              key={item.id}
            />
          );
        })}
      </div>

      <ModalMenu />
    </div>
  );
}
