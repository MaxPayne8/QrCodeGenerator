// import { addQr } from "@/app/Utils/appSlice";
// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";

// const NFCReaderWriter = () => {
//   const [nfcSupported, setNfcSupported] = useState(false);
//   const [message, setMessage] = useState("");
//   const [writeMessage, setWriteMessage] = useState("");
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if ("NDEFReader" in window && "NDEFWriter" in window) {
//       setNfcSupported(true);
//     }
//   }, []);

//   const handleRead = async () => {
//     try {
//       const nfc = new NDEFReader();
//       await nfc.scan();
//       nfc.onreading = (event) => {
//         const message = event.message?.records[0].data?.text || "No data";
//         setMessage(message);
//       };
//     } catch (error) {
//       console.error("Error reading NFC:", error);
//     }
//   };

//   const handleWrite = async () => {
//     try {
//       const nfc = new NDEFWriter();
//       const message = [new NDEFRecord({ text: writeMessage })];
//       await nfc.write({ records: message });
//       setWriteMessage("");
//       console.log("NFC message written successfully.");
//     } catch (error) {
//       console.error("Error writing NFC:", error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       {nfcSupported ? (
//         <div>
//           <h2>NFC Reader/Writer</h2>
//           <div>
//             <button onClick={handleRead}>Read NFC</button>
//             <p>Read Message: {message}</p>
//           </div>
//           <div>
//             <input
//               type="text"
//               value={writeMessage}
//               onChange={(e) => setWriteMessage(e.target.value)}
//               placeholder="Enter message to write"
//             />
//             <button onClick={handleWrite}>Write NFC</button>
//           </div>
//         </div>
//       ) : (
//         <p
//           className="bg-slate-900 text-slate-300 p-1 rounded-lg hover:scale-110 hover:cursor-pointer duration-150 animate-bounce"
//           onClick={() => {
//             dispatch(addQr("qr"));
//           }}
//         >
//           NFC not supported in this browser.
//         </p>
//       )}
//     </div>
//   );
// };

// export default NFCReaderWriter;
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

      <div className="App-container flex justify-between w-96 p-10">
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
