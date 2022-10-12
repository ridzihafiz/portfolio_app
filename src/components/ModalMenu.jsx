import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ModalMenu() {
  const [show, setShow] = useState(false);

  const handleShowModal = () => {
    setShow(!show);
  };

  return (
    <>
      {show && (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#9AD7B9]/90 fixed top-0 left-0 z-[200]">
          <Link
            to={"/biodata"}
            className="w-full h-16 flex justify-center items-center text-[#736653] font-bold"
            onClick={handleShowModal}
          >
            Biodata
          </Link>

          <Link
            to={"/skill"}
            className="w-full h-16 flex justify-center items-center text-[#736653] font-bold"
            onClick={handleShowModal}
          >
            Skill
          </Link>

          <a
            href={"tel:+6285287302033"}
            target="_blank"
            className="w-full h-16 flex justify-center items-center text-[#736653] font-bold"
            onClick={handleShowModal}
          >
            Contact
          </a>

          <a
            href={"https://linkedin.com/ridzihafiz"}
            target="_blank"
            className="w-full h-16 flex justify-center items-center text-[#736653] font-bold"
            onClick={handleShowModal}
          >
            LinkedIn
          </a>

          <a
            href={"https://github.com/ridzihafiz"}
            target="_blank"
            className="w-full h-16 flex justify-center items-center text-[#736653] font-bold"
            onClick={handleShowModal}
          >
            GitHub
          </a>

          <a
            href={"https://stackblitz.com/ridzihafiz"}
            target="_blank"
            className="w-full h-16 flex justify-center items-center text-[#736653] font-bold"
            onClick={handleShowModal}
          >
            Stackblitz
          </a>
        </div>
      )}

      <button
        className="w-[80px] h-[80px] bg-[#736653] text-[#9AD7B9] rounded-full fixed -bottom-4 -right-4 flex justify-center items-center z-[250]"
        onClick={handleShowModal}
      >
        <FiMenu />
      </button>
    </>
  );
}
