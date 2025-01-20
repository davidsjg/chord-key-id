import React from "react";
import "./NoteReader.module.css";
import NoteBanner from "./NoteBanner/NoteBanner";
import { useState, useEffect } from "react";
import NoteSelector from "../SevenGame/NoteSelector/NoteSelector";



function NoteReader() {
  const [currNum, setCurrNum] = useState("null");

  function handleUpdateState2(prop1, prop2) {
    console.log('sup fro')
  }


  return (
    <>
      <div className="mainAppContain">
        <NoteBanner />
        <NoteSelector onUpdateState={handleUpdateState2} currIndex={currNum} />
      </div>
    </>
  );
}
export default NoteReader;
