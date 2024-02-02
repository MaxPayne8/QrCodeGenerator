"use client";
import React, { useState } from "react";
// import "./QrCode.scss";
import { QRCode } from "react-qrcode-logo";

const QrCode = () => {
  const [qr_value, setqr_value] = useState("");
  const [setqr_val, setsetqr_val] = useState("");
  const [qr_style, setqr_style] = useState("squares");
  const [qr_color, setqr_color] = useState("black");
  const [qr_logo, setqr_logo] = useState("");
  console.log("qr logo", qr_logo);

  const create_qr = () => {
    setsetqr_val(qr_value);
  };
  return (
    <div className="body1">
      <h1 className="text-center font-semibold text-4xl">QR CODE</h1>

      <div className="center_container flex justify-between py-10 px-40">
        <div className="section1 flex border-2 border-black ">
          <div className="qr_container flex flex-col justify-center items-center ">
            <QRCode
              value={setqr_val}
              size="350"
              //  bgColor={qr_color}
              fgColor={qr_color}
              qrStyle={qr_style}
              logoImage={qr_logo}
              logoWidth={75}
              logoHeight={35}
              logoOpacity={1}
            />
            <div className="flex flex-col">
              <label className="text-center font-semibold">
                Enter URL / Value
              </label>
              <input
                className="w-full border-2 border-black my-2 rounded-lg px-1"
                value={qr_value}
                onChange={(e) => {
                  setqr_value(e.target.value);
                }}
                placeholder="https://ABCD.com"
              />
            </div>

            <button
              className="p-1 text-white bg-black rounded-lg my-4"
              type="button"
              disabled={qr_value == ""}
              onClick={create_qr}
            >
              Create QR Code
            </button>
          </div>
        </div>
        <div className="section2 ">
          <div className="sub_section flex flex-col justify-center items-center border-2 border-black">
            <h2 className="font-semibold text-2xl">Generate QR Code</h2>

            <div className="qr_style flex flex-col items-center mx-auto ">
              <p className="my-2 font-semibold ">Select Logo</p>
              <div className="style_container flex justify-center">
                <input
                  type="file"
                  className="flex justify-center bg-gray-400 w-64 "
                  onChange={(e) => {
                    const selectedFile = e.target.files[0];
                    if (selectedFile) {
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        const base64String = event.target.result;
                        setqr_logo(base64String);
                      };
                      reader.readAsDataURL(selectedFile);
                    }
                  }}
                />

                {qr_logo && (
                  <button
                    className="text-white bg-red-700"
                    type="button"
                    onClick={() => {
                      setqr_logo("");
                    }}
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            <div className="qr_style flex flex-col justify-center items-center">
              <p className="font-semibold mt-2">Style</p>
              <div className="style_container flex ">
                <span>
                  <button
                    // className={}
                    className={`p-2 m-2 bg-gray-300 ${
                      qr_style === "squares" ? "border-2 border-black" : ""
                    }`}
                    type="button"
                    onClick={() => setqr_style("squares")}
                  >
                    Squares
                  </button>
                </span>
                <span>
                  <button
                    className={`p-2 m-2 bg-gray-300 ${
                      qr_style === "dots" ? "border-2 border-black" : ""
                    }`}
                    type="button"
                    onClick={() => setqr_style("dots")}
                  >
                    Dots
                  </button>
                </span>
              </div>
            </div>

            <div className="qr_color flex flex-col justify-center items-center font-semibold">
              <p>Color</p>
              <div className="colos_container flex justify-between gap-3 my-2">
                <button
                  style={{
                    background: "red",
                    borderRadius: "1.6rem",
                    padding: "16px",
                    border: qr_color == "red" ? "3px solid black" : "none",
                  }}
                  type="button"
                  onClick={() => setqr_color("red")}
                ></button>

                <button
                  style={{
                    background: "blue",
                    borderRadius: "1.6rem",
                    padding: "16px",
                    border: qr_color == "blue" ? "3px solid black" : "none",
                  }}
                  type="button"
                  onClick={() => setqr_color("blue")}
                ></button>

                <button
                  style={{
                    background: "green",
                    borderRadius: "1.6rem",
                    padding: "16px",
                    border: qr_color == "green" ? "3px solid black" : "none",
                  }}
                  type="button"
                  onClick={() => setqr_color("green")}
                ></button>

                <button
                  style={{
                    background: "gray",
                    borderRadius: "1.6rem",
                    padding: "16px",
                    border: qr_color == "gray" ? "3px solid black" : "none",
                  }}
                  type="button"
                  onClick={() => setqr_color("gray")}
                ></button>
              </div>
            </div>

            <div className="download_container">
              {/* <button
                className="download_btn"
                disabled={qr_value === ""}
                onClick={() => alert("click")}
              >
                Download
              </button> */}
              <a
                href={qr_logo}
                download="qr_logo.png"
                className="bg-blue-700 text-white px-1"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
