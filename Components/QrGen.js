"use client";
import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import { CiTextAlignCenter } from "react-icons/ci";
import { MdContactPhone } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa6";
import QrCode from "./MakeQr";
import BarCode_Page from "./BarCode";
import { useSelector } from "react-redux";

import Contact from "./Contact";
import Pdf from "./Pdf";
import FreeTxtQr from "./FreeTxtQr";
import NFCReaderWriter from "./Nfc";
import GenQr from "./GenQr";
import ScanQr from "./ScanQr";

const QrGen = () => {
  var QRCode = require("qrcode");
  const [url, setUrl] = useState("");
  const [txt, setTxt] = useState("");
  console.log(txt);
  const [qr, setQr] = useState("");
  const [btnSize, setBtnSize] = useState(false);
  const [showUrl, setShowUrl] = useState(true);
  const [showTxt, setShowTxt] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showPdf, setShowPdf] = useState(false);

  var opts = {
    margin: 2,
    color: {
      dark: "#335383ff",
      light: "#000000ff",
    },
  };

  const handleSubmitUrl = (e) => {
    e.preventDefault();
    qrGenUrl();
  };

  var opts = {
    margin: 2,
    color: {
      dark: "#335383ff",
      light: "#000000ff",
    },
  };

  const qrGenUrl = () => {
    QRCode.toDataURL(url, opts, (err, url) => {
      if (err) console.log("Error");
      console.log(url);
      setQr(url);
    });
  };
  const { qrorBar } = useSelector((store) => store.qr);
  console.log(qrorBar);

  console.log(btnSize);
  return (
    <div className="bg-slate-300 ">
      {qrorBar === "qr" && (
        <ul className="flex justify-between items-center px-10 md:px-24  bg-slate-700 border-2 border-white p-2">
          <li
            className={`flex flex-col justify-center items-center hover:bg-slate-900 hover:cursor-pointer rounded-lg duration-150 p-2 px-4 ${
              showUrl && " bg-slate-900 shadow-md shadow-white"
            }`}
            onClick={() => {
              setShowUrl(true);
              setShowTxt(false);
              setShowContact(false);
              setShowPdf(false);
              setQr(false);
              setTxt(false);
            }}
          >
            <FaLink className="text-white" size={25} />
            <h1 className="text-white">URL</h1>
          </li>
          <li
            className={`flex flex-col justify-center items-center hover:bg-slate-900 hover:cursor-pointer rounded-lg duration-150 p-2 px-4 ${
              showTxt && " bg-slate-900 shadow-md shadow-white"
            }`}
            onClick={() => {
              setShowUrl(false);
              setShowTxt(true);
              setShowContact(false);
              setShowPdf(false);
              setQr(false);
              setTxt(false);
            }}
          >
            <CiTextAlignCenter className="text-white" size={25} />
            <h1 className="text-white hidden md:block">FREE TEXT</h1>
            <h1 className="text-white block md:hidden ">TEXT</h1>
          </li>
          <li
            className={`flex flex-col justify-center items-center hover:bg-slate-900 hover:cursor-pointer rounded-lg duration-150 p-2 px-4 ${
              showContact && " bg-slate-900 shadow-md shadow-white"
            }`}
            onClick={() => {
              setShowUrl(false);
              setShowTxt(false);
              setShowContact(true);
              setShowPdf(false);
              setQr(false);
              setTxt(false);
            }}
          >
            <MdContactPhone className="text-white" size={25} />
            <h1 className="text-white">CONTACT</h1>
          </li>
          <li
            className={`flex flex-col justify-center items-center hover:bg-slate-900 hover:cursor-pointer rounded-lg duration-150 p-2 px-4 ${
              showPdf && " bg-slate-900 shadow-md shadow-white"
            }`}
            onClick={() => {
              setShowUrl(false);
              setShowTxt(false);
              setShowContact(false);
              setShowPdf(true);
              setQr(false);
              setTxt(false);
            }}
          >
            <FaFilePdf className="text-white" size={25} />
            <h1 className="text-white">PDF</h1>
          </li>
        </ul>
      )}

      {showUrl && qrorBar === "qr" && <QrCode />}
      {showTxt && qrorBar === "qr" && <FreeTxtQr />}
      {qrorBar === "bar" && <BarCode_Page />}
      {qrorBar === "nfc" && <NFCReaderWriter />}
      {qrorBar === "phone" && <GenQr />}
      {qrorBar === "phonescan" && <ScanQr />}

      {showContact && qrorBar === "qr" && <Contact />}
      {showPdf && qrorBar === "qr" && <Pdf />}
    </div>
  );
};

export default QrGen;
