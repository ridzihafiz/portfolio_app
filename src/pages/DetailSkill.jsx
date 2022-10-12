import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ModalMenu from "../components/ModalMenu";
import SkillCard from "../components/SkillCard";
import dataDetailSkill from "../constants/dataDetailSkill";

export default function DetailSkill() {
  const { item } = useParams();

  return (
    <div className="w-screen min-h-screen flex flex-col p-[30px] bg-[#9AD7B9] text-[#736653] overflow-hidden max-w-[500px] mx-auto">
      <Header title={item} />

      <div className="mt-12 flex flex-col gap-4">
        <img
          src={dataDetailSkill[item].bannerImage}
          alt={"HTML"}
          className="w-full h-[100px] object-cover rounded-lg"
        />
        <p>{dataDetailSkill[item].desc}</p>

        <div className="flex flex-col gap-4 mt-4">
          {dataDetailSkill[item].data.map((v) => {
            return (
              <SkillCard
                title={item}
                content={v.title}
                image={v.image}
                multilink={v.multilink}
                key={v.id}
              />
            );
          })}
        </div>
      </div>

      <ModalMenu />
    </div>
  );
}
