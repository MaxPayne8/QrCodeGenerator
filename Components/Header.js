import Link from "next/link";
import React, { useState } from "react";
import qrLogo from "../app/qrCode.jpg";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addQr } from "@/app/Utils/appSlice";
import etechcube from "../app/Utils/etechcube.png";

const Header = () => {
  const dispatch = useDispatch();
  const [bold, setBold] = useState(true);
  // const etechLogo = require("../app/Utils/etechcube.png");
  return (
    <div className="bg-slate-200 h-20 text-slate-800">
      <ul className="flex justify-between px-8  items-center py-4 ">
        <li>
          <Image
            src={etechcube}
            className="w-28 h-12 rounded-lg mix-blend-multiply	"
            alt="logo"
          />
        </li>
        <div>
          <ul className="flex">
            <li
              className={`hover:scale-105 duration-100 cursor-pointer hover:font-semibold ${
                bold && "font-bold underline"
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
                !bold && "font-bold underline"
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
