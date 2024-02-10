import React, { useContext } from "react";
// import "./Scanner.css";
import Spinner from "../../spinner.gif";
import { ActionsContext } from "../../contexts/context";
import Image from "next/image";

const Scanner = () => {
  const { actions, setActions } = useContext(ActionsContext);
  return (
    <div
      className="scanner bg-slate-400 p-5 absolute top-20 rounded-full"
      data-aos="zoom-in"
    >
      <p
        className=" hover:text-3xl text-xl hover:cursor-pointer duration-150 text-red-700 font-bold w-8 text-center rounded-full bg-slate-600"
        onClick={() => setActions({ ...actions, scan: null })}
      >
        X
      </p>
      <div className="scanner-container">
        <Image
          src={Spinner}
          alt="spinning log"
          className="bg-white  rounded-full"
        />
        <p className="text-center font-semibold">Scanning...</p>
      </div>
    </div>
  );
};

export default Scanner;
