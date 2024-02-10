import React, { useContext } from "react";
// import "./Writer.css";
import Save from "../SVGs/save";
import { ActionsContext } from "@/contexts/context";
import Aos from "aos";
import "aos/dist/aos.css";
const Writer = ({ writeFn }) => {
  const { actions, setActions } = useContext(ActionsContext);
  const [message, setMessage] = React.useState("");

  const onSave = (e) => {
    e.preventDefault();
    writeFn(message);
    setMessage("");
  };

  return (
    <div
      className="writer-container bg-slate-600 w-48 h-60 absolute top-32 p-2 rounded-xl"
      data-aos="zoom-in"
    >
      <p
        className="  hover:text-xl duration-150 hover:cursor-pointer text-red-700 font-bold bg-black px-1 rounded-full w-8 text-center"
        onClick={() => setActions({ ...actions, write: null })}
      >
        X
      </p>
      <form onSubmit={onSave}>
        <div className="flex flex-col justify-center items-center">
          <textarea
            type="text"
            placeholder="Enter Message..."
            value={message}
            className="h-28 p-2 "
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            className=" text-white hover:scale-110 duration-150 mt-4"
            type="submit"
          >
            <Save />
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Writer;
