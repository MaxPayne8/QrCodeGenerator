"use client";
import React from "react";
import Header from "../../Components/Header";
import QrGen from "../../Components/QrGen";
import { Provider } from "react-redux";
import appStore from "../Utils/appStore";

const QrHome = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <QrGen />
      </div>
    </Provider>
  );
};

export default QrHome;
