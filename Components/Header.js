import Link from "next/link";
import React, { useState } from "react";
import qrLogo from "../app/qrCode.jpg";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addQr } from "@/app/Utils/appSlice";
import etechcube from "../app/Utils/etechcube.png";
import Typewriter from "typewriter-effect";

const Header = () => {
  const dispatch = useDispatch();
  const [bold, setBold] = useState(true);
  // const etechLogo = require("../app/Utils/etechcube.png");
  return (
    <div className="bg-gradient-to-b from-slate-800 via-slate-500 to-slate-800 h-20 text-slate-200">
      <ul className="flex justify-between px-8  items-center py-4 ">
        <li>
          <Image
            src={etechcube}
            className="w-28 md:w-36 h-12 rounded-lg mix-blend-lighten bg-slate-100 hover:cursor-pointer hover:scale-110 duration-150	"
            alt="logo"
            onClick={() => {
              dispatch(addQr("qr"));
              setBold(true);
            }}
          />
        </li>
        <div className="hidden md:block">
          <Typewriter
            options={{
              strings: [
                "Generate Qr code and Bar code for your Organization with Logo!!",
                "Powered by Etech Cube!!",
              ],
              autoStart: true,
              loop: true,
            }}
          ></Typewriter>
        </div>

        <div>
          <ul className="flex pr-0 md:pr-8">
            <li
              className={`hover:scale-105 duration-100 cursor-pointer hover:font-semibold ${
                bold && "font-extrabold underline text-red-700"
              }`}
              onClick={() => {
                dispatch(addQr("qr"));
                setBold(true);
              }}
            >
              QR CODE
            </li>
            <li className="px-1">/</li>
            <li
              className={`hover:scale-105 duration-100 cursor-pointer hover:font-semibold ${
                !bold && "font-extrabold underline text-red-700"
              }`}
              onClick={() => {
                dispatch(addQr("bar"));
                setBold(false);
              }}
            >
              BAR CODE
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Header;
