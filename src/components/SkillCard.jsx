import React from "react";
import { Link } from "react-router-dom";

export default function SkillCard({ title, image, content, link, multilink }) {
  return (
    <div className="bg-white/50 flex flex-col gap-2 w-full p-[20px] rounded-lg shadow-lg">
      <h1 className="text-[16px] font-bold capitalize"> {title} </h1>
      <img
        src={image}
        alt={title}
        className="w-full h-[200px] object-cover rounded-lg "
      />
      <p className="font-light"> {content} </p>

      {link && (
        <Link
          to={link}
          className="h-10 bg-[#736653] text-white rounded-full w-[180px] flex justify-center items-center mx-auto "
        >
          Open Portfolio
        </Link>
      )}

      {multilink && (
        <div className="mt-4 text-sky-500 flex gap-2 flex-wrap justify-center">
          {multilink.map((i) => {
            return (
              <a href={i.url} key={i.id} target="_blank" className="italic">
                {i.name}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
