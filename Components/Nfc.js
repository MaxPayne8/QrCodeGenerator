import React from "react";

import Scan from "../containers/Scan";
import Write from "../containers/Write";
import { useState } from "react";
import { ActionsContext } from "../contexts/context";
import Aos from "aos";
import "aos/dist/aos.css";

const Nfc = () => {
  const [actions, setActions] = useState(null);
  const { scan, write } = actions || {};

  const actionsValue = { actions, setActions };

  const onHandleAction = (actions) => {
    setActions({ ...actions });
  };
  return (
    <div className="App flex flex-col  items-center min-h-screen">
      <div className="p-6 m-6" data-aos="fade-up" data-aos-duration="1000">
        <img
          src="https://play-lh.googleusercontent.com/4kxHjDR4qOsolrqcE72xPxC_wEL845F1D3F8xpLVu87UJzq7OrH7VvMxMl9GjceMADo"
          className="App-logo rounded-full w-48 h-48 "
          alt="logo"
        />
        <h1 className="text-center text-2xl font-semibold">NFC Tool</h1>
      </div>

      <div className="App-container flex justify-between w-96 -mt-5">
        <button
          onClick={() => onHandleAction({ scan: "scanning", write: null })}
          className=" bg-slate-950 text-slate-200 p-2 rounded-lg w-20"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Scan
        </button>
        <button
          onClick={() => onHandleAction({ scan: null, write: "writing" })}
          className=" bg-slate-950 text-slate-200 p-2 rounded-lg w-20  "
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          Write
        </button>
      </div>
      <ActionsContext.Provider value={actionsValue}>
        {scan && <Scan />}
        {write && <Write />}
      </ActionsContext.Provider>
    </div>
  );
};

export default Nfc;
