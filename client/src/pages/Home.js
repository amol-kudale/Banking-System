import React from "react";
import Photo from "../images/Banking.svg";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="intro">
          <h1>Welcome to Keep Safe</h1>
        </div>
        <div className="intro-img">
          <img src={Photo} alt="" />
        </div>
      </div>
    </div>
  );
}
