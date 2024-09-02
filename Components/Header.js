import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addQr } from "@/app/Utils/appSlice";
import etechcube from "../app/Utils/etechcube.png";
import Typewriter from "typewriter-effect";

const Header = () => {
  const dispatch = useDispatch();
  const [bold, setBold] = useState("qr");

  return (
    <div className="bg-gradient-to-b from-slate-800 via-slate-500 to-slate-800 h-20 text-slate-200">
      <ul className="flex justify-between px-8  items-center py-4 ">
        <li>
          <Image
            src="https://coloringnotebook.com/uploads/blog/49n77v/custom%20qr%20design.jpg"
            className="w-28 md:w-36 h-12 rounded-lg mix-blend bg-slate-100 hover:cursor-pointer hover:scale-110 duration-150	"
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
                "Generate Qr code  with Logo and Bar code for your Organization!!",
                "Powered by Etech Cube!!",
              ],
              autoStart: true,
              loop: true,
            }}
          ></Typewriter>
        </div>

        <div>
          <ul className="flex pr-0 md:pr-8 gap-4 sm:gap-6">
            <li
              className={`hover:scale-105 duration-100 cursor-pointer hover:font-semibold ${
                bold === "qr" && "font-extrabold text-red-700 "
              }`}
              onClick={() => {
                dispatch(addQr("qr"));
                setBold("qr");
              }}
            >
              QR <span className="hidden sm:inline-block">CODE</span>
            </li>

            <li
              className={`hover:scale-105 duration-100 cursor-pointer hover:font-semibold ${
                bold === "bar" && "font-extrabold  text-red-700"
              }`}
              onClick={() => {
                dispatch(addQr("bar"));
                setBold("bar");
              }}
            >
              BAR <span className="hidden sm:inline-block">CODE</span>
            </li>
            <li
              className={`hover:scale-105 duration-100 cursor-pointer hover:font-semibold ${
                bold === "nfc" && "font-extrabold text-red-700"
              }`}
              onClick={() => {
                dispatch(addQr("nfc"));
                setBold("nfc");
              }}
            >
              NFC
            </li>
            {/* <li
              className={`hover:scale-105 duration-100 cursor-pointer hover:font-semibold ${
                bold === "phone" && "font-extrabold underline text-red-700"
              }`}
              onClick={() => {
                dispatch(addQr("phone"));
                setBold("phone");
              }}
            >
              SHARE NUMBER
            </li>
            <li
              className={`hover:scale-105 duration-100 cursor-pointer hover:font-semibold ${
                bold === "phonescan" && "font-extrabold underline text-red-700"
              }`}
              onClick={() => {
                dispatch(addQr("phonescan"));
                setBold("phonescan");
              }}
            >
              SHARE NUMBER
            </li> */}
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Header;
