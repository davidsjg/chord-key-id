import React from "react";
import { useState } from "react";
import "./NoteBanner.css";
import DispNote from "../DispNote/DispNote";

function NoteBanner({ scoreboard, displayChord1 }) {
  let masterArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <>
      <div className="bannerContain2">
        <div className="disp note2"></div>
        <div className="note1">
          {masterArr.map((note) => {
            return (
              <>
                <DispNote key={note} number={note} />
              </>
            );
          })}
        </div>
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
export default NoteBanner;
