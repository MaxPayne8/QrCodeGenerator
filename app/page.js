"use client";
import React, { useEffect, useState } from "react";
import Header from "@/Components/Header";
import QrGen from "@/Components/QrGen";
import Login from "@/Components/Login";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const page = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Login />
        {/* <Header />
        <QrGen /> */}
      </div>
    </Provider>
  );
};

export default page;
