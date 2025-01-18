import React from "react";
import { useState } from "react";
import "./Banner.css";

function Banner({ scoreboard, displayChord1 }) {

  return (
    <>
      <div className="bannerContain">
        <div className="disp note2"></div>
        <div className="disp note1">{displayChord1}</div>
        <div className="disp note3"></div>
      </div>
      <div className="scoreContain">
        <div className={scoreboard === "-" ? "scoreHidden" : "score"}>
          {scoreboard}
        </div>
      </div>
    </>
  );
}
export default Banner;
