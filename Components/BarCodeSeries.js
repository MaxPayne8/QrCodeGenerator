"use client";
import React, { useState } from "react";
// import "./BarCodeSeries.scss";
import Barcode from "react-barcode";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addQr } from "@/app/Utils/appSlice";

const BarCodeSeries = () => {
  //   const navigate = useNavigate();
  const router = useRouter();
  const dispatch = useDispatch();

  const [prefix_value, setprefix_value] = useState("");
  const [start_value, setstart_value] = useState(0);
  const [end_value, setend_value] = useState(0);
  const [series, setseries] = useState([]);

  const [show, setShow] = useState(false); // Example state management
  console.log("show", show);
  console.log("series", series);

  const generate = () => {
    let arr = [];
    setShow(true); // Show loading state before generating the series

    setTimeout(() => {
      if (prefix_value && start_value && end_value) {
        if (end_value >= start_value) {
          for (let index = start_value; index <= end_value; index++) {
            arr = [...arr, prefix_value + index];
          }

          setShow(false); // Hide loading state after generating the series
          setseries(arr); // Assuming setSeries is a state update function
        }
      }
      alert("Hi");
    }, 2000);
  };

  return (
    <>
      <div className="s_main_container">
        {show && (
          <div style={{ display: show ? "block" : "none" }} className="modal">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Please Wait While We Generating BarCode
            </div>
          </div>
        )}

        {/* <div style={{visibility: show ? "visible" : "hidden"}} className="modal">Modal</div> */}
        <div className="info_container">
          <button onClick={() => dispatch(addQr("bar"))}>Go Back!</button>
          <h3>Generate Bar Code Series</h3>
          <div className="info_container_child">
            <div>
              <label>Enter Prefix Value</label>
              <br />
              <input
                type="text"
                value={prefix_value}
                onChange={(e) => {
                  setprefix_value(e.target.value);
                }}
              />
            </div>

            <div>
              <label>Enter Start Value</label>
              <br />
              <input
                type="number"
                min={0}
                value={start_value}
                onChange={(e) => {
                  setstart_value(e.target.value);
                }}
              />
            </div>

            <div>
              <label>Enter End Value</label>
              <br />
              <input
                type="number"
                min={0}
                value={end_value}
                onChange={(e) => {
                  setend_value(e.target.value);
                }}
              />
            </div>

            <div>
              <button type="button" onClick={generate}>
                {" "}
                Generate Series
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="barcode_container">
        {series.length !== 0 && <h2>BarCode Series are :</h2>}
        {series.length === 0 ? (
          <div>No Data</div>
        ) : (
          <>
            {series.map((item, index) => {
              return <Barcode key={index} value={item} />;
            })}
          </>
        )}
      </div>
    </>
  );
};

export default BarCodeSeries;
