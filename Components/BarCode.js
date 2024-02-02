import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import Barcode from "react-barcode";
import Aos from "aos";
import "aos/dist/aos.css";
import html2canvas from "html2canvas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BarCode_Page = () => {
  const [input_val, setinput_val] = useState("");
  const [barcode_value, setbarcode_value] = useState("ABCD-1234567");
  const [size, setSize] = useState(false);
  const [printsize, setprintSize] = useState(false);
  const [warn, setWarn] = useState(false);
  const showToastMessage = () => {
    toast.success("BAR CODE GENERATED!", {
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

  const generate = () => {
    if (input_val !== "") {
      setbarcode_value(input_val);
      showToastMessage();
      setinput_val("");
      setWarn(false);
    } else {
      setWarn(true);
    }
  };
  const componentRef = useRef();

  const handlePrint = () => {
    html2canvas(componentRef.current).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/png");

      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "bar_code.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };
  useEffect(() => {
    Aos.init();
  }, []);
  useEffect(() => {
    if (input_val !== 0) {
      setWarn(false);
    }
  }, [input_val]);
  return (
    <div className="min-h-screen">
      <ToastContainer />
      <h1 className="text-center p-2 text-2xl font-semibold bg-slate-600 text-slate-200">
        Generate BarCode
      </h1>
      <div className="main_container flex flex-col md:flex-row justify-between items-center  px-4 md:px-40 m-10">
        <div
          className="container1 border-2 border-black w-full md:w-[40%] p-2"
          data-aos="fade-right"
        >
          <div>
            <h1 className="text-center p-1 font-semibold">Enter Value</h1>
          </div>
          <textarea
            placeholder="Enter Value"
            value={input_val}
            onChange={(val) => {
              setinput_val(val.target.value);
            }}
            className="w-full h-28 px-1 border-2 border-black"
          />
          {warn && (
            <h1 className="text-sm text-red-700 -mt-2 font-semibold">
              Please enter serial number
            </h1>
          )}

          <div className="download_container flex flex-col items-center ">
            <button
              className={`p-1 text-white bg-slate-900 rounded-lg  my-4 ${
                size && "scale-90"
              }`}
              type="button"
              onClick={generate}
              onMouseDown={() => setSize(true)}
              onMouseUp={() => setSize(false)}
            >
              Create Bar Code
            </button>
            <div
              className={`text-center bg-green-500 text-white p-1 rounded-lg m-1 ${
                printsize && "scale-90"
              }`}
            >
              <button
                className="responsive-button"
                variant="success"
                onClick={handlePrint}
                onMouseDown={() => setprintSize(true)}
                onMouseUp={() => setprintSize(false)}
              >
                Download
              </button>
            </div>
          </div>
        </div>
        <div
          className="container2 border-2 border-black p-2 mt-10 md:mt-0"
          data-aos="fade-left"
          ref={componentRef}
        >
          <Barcode value={barcode_value} />
        </div>
      </div>
    </div>
  );
};

export default BarCode_Page;
