import React from "react";
import logo from './img/logo-Final.png'

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        src={logo}
        alt="loading"
        width={"200px"}
        height={"200px"}
      />
    </div>
  );
}
