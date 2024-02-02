"use client";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Caraousel from "@/Components/Caraousel";
import Header from "@/Components/Header";
import QrGen from "@/Components/QrGen";
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
        <Header />
        <QrGen />
      </div>
      {/* <Caraousel /> */}
    </Provider>
  );
};

export default page;
