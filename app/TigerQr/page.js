"use client";
import React, { useEffect, useRef, useState } from "react";
import qrLogo from "../qrCode.jpg";
import Image from "next/image";
import axios from "axios";

const TigerQr = () => {
  //e430a410-be78-11ee-b320-534153a1c74f
  const [btnSize, setBtnSize] = useState(false);
  const [qrImg, setQrImg] = useState();
  const [image, setImage] = useState();
  //   const [logo, setLogo] = useState();
  const [urll, setUrll] = useState("");

  const options = {
    method: "POST",
    url: "https://qrtiger.com/api/qr/static",
    headers: {
      Authorization: "Bearer e0058930-bf42-11ee-b1ac-0d0eb1937acf",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: {
      size: 500,
      colorDark: "rgb(5,64,128)",
      logo: `${image}`,
      eye_outer: "eyeOuter2",
      eye_inner: "eyeInner1",
      qrData: "pattern0",
      backgroundColor: "rgb(255,255,255)",
      transparentBkg: false,
      qrCategory: "url",
      text: urll,
    },
  };

  const getData = async () => {
    try {
      const data = await axios.request(options);
      setQrImg(data.data.url);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmitUrl = (e) => {
    e.preventDefault();
    getData();
  };
  //   const handleImage = (e) => {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {};

  //     setImage(URL.createObjectURL(e.target.files[0]));

  //     setLogo(e.target.files[0]);

  //     console.log(e.target.files[0]);
  //     console.log(URL.createObjectURL(e.target.files[0]));
  //   };
  console.log(image);
  //   console.log(logo);
  console.log(qrLogo);
  function readFile(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
      // The file's text will be printed here
      console.log(event.target.result);
      setImage(event.target.result);
      console.log(event);
    };

    reader.readAsDataURL(file);
  }

  //   useEffect(() => {
  //     getData();
  //   }, []);
  return (
    <div>
      <form
        onSubmit={(e) => handleSubmitUrl(e)}
        className="flex flex-col justify-center items-center mt-10 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-600 p-4 w-[550px] rounded-lg mx-auto"
      >
        <input
          placeholder="Enter your Name"
          className="border-2 rounded-md border-blue-800 px-2 py-1 w-96"
          onChange={(e) => {
            setUrll(e.target.value);
          }}
        ></input>
        <input
          placeholder="Enter your Phone Number"
          className="border-2 rounded-md border-blue-800 px-2 py-1 w-96"
          onChange={(e) => {
            setUrll(e.target.value);
          }}
        ></input>
        <input
          placeholder="Enter your Email address"
          className="border-2 rounded-md border-blue-800 px-2 py-1 w-96"
          onChange={(e) => {
            setUrll(e.target.value);
          }}
        ></input>

        <input
          className="p-2 m-2"
          type="file"
          //   onChange={(e) => handleImage(e)}
          onChange={(e) => readFile(e)}
          id="selectImage"
        />

        <button
          className={`px-2 bg-violet-800 text-white rounded-lg font-semibold m-2 ${
            btnSize ? "scale-90" : "scale-100"
          }`}
          onMouseDown={() => setBtnSize(true)}
          onMouseUp={() => setBtnSize(false)}
        >
          Create QR Code
        </button>
      </form>
      <div className="relative">
        <img src={qrImg} alt="qr" />
        <img className="absolute top-0 left-0 right-0" src={image} alt="logo" />
      </div>

      <Image src={qrLogo} alt="source" />
    </div>
  );
};

export default TigerQr;
