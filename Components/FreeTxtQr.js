"use client";
import React, { useEffect, useRef, useState } from "react";

import { QRCode } from "react-qrcode-logo";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import Aos from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FreeTxtQr = () => {
  const [qr_value, setqr_value] = useState("");
  const [setqr_val, setsetqr_val] = useState("");
  const [qr_style, setqr_style] = useState("squares");
  const [qr_color, setqr_color] = useState("black");
  const [qr_logo, setqr_logo] = useState("");
  const [size, setSize] = useState(false);
  const [printsize, setprintSize] = useState(false);
  console.log("qr logo", qr_logo);

  const [warning, setwarning] = useState(false);
  const showToastMessage = () => {
    toast.success("QR GENERATED!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const create_qr = () => {
    if (qr_value === "") {
      setwarning(true);
    } else {
      setsetqr_val(qr_value);
      setqr_value("");
      showToastMessage();
    }
  };

  const componentRef = useRef();

  const handlePrint = () => {
    html2canvas(componentRef.current).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/png");

      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "qr_code.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    if (qr_value !== "") setwarning(false);
  }, [qr_value]);

  return (
    <div className="body1">
      <ToastContainer />
      <div className="center_container flex flex-col-reverse gap-2 md:gap-8 lg:flex-row justify-between py-4 px-4  md:px-40 min-h-screen">
        <div className="section1 " data-aos="fade-right">
          <div
            className="p-2 border-2 border-black hidden lg:block  mx-auto justify-center items-center"
            ref={componentRef}
          >
            <QRCode
              value={setqr_val}
              size={350}
              fgColor={qr_color}
              qrStyle={qr_style}
              logoImage={qr_logo}
              logoWidth={50}
              logoHeight={50}
              logoOpacity={1}
            />
          </div>
          <div
            className="p-2 border-2 border-black  md:hidden flex justify-center items-center"
            ref={componentRef}
          >
            <QRCode
              value={setqr_val}
              size={300}
              fgColor={qr_color}
              qrStyle={qr_style}
              logoImage={qr_logo}
              logoWidth={50}
              logoHeight={50}
              logoOpacity={1}
            />
          </div>

          <button
            className={`text-center w-full bg-green-500 text-white p-1 rounded-lg m-1 ${
              printsize && "scale-90"
            }`}
            variant="success"
            onClick={handlePrint}
            onMouseDown={() => setprintSize(true)}
            onMouseUp={() => setprintSize(false)}
          >
            Download
          </button>
        </div>

        <div className="section2 w-full md:w-[40%] " data-aos="fade-left">
          <form
            className="sub_section flex flex-col justify-center items-center border-2 border-black "
            onSubmit={(e) => {
              e.preventDefault();
              create_qr();
            }}
          >
            <h2 className="font-semibold text-2xl">Generate QR Code</h2>

            <div className="qr_style flex flex-col items-center mx-auto ">
              <div className="flex flex-col">
                <div className="flex flex-col items-center">
                  <label className="text-center font-semibold">
                    Enter Text
                  </label>
                  <textarea
                    className="h-20 border-2 border-black my-2 rounded-lg px-1"
                    value={qr_value}
                    onChange={(e) => {
                      setqr_value(e.target.value);
                    }}
                    placeholder="Enter your message/info"
                  />
                  {warning && (
                    <label className="text-red-800 text-sm font-semibold -mt-2 ">
                      Please Enter Text
                    </label>
                  )}
                </div>
              </div>

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
                    className={`p-2 rounded-lg m-2 bg-gray-300 ${
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
                    className={`p-2 m-2 rounded-lg bg-gray-300 ${
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
              <button
                className={`p-1 text-white bg-slate-900 rounded-lg my-4 ${
                  size && "scale-90"
                }`}
                type="button"
                // disabled={qr_value == ""}
                onClick={create_qr}
                onMouseDown={() => setSize(true)}
                onMouseUp={() => setSize(false)}
              >
                Create QR Code
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FreeTxtQr;
