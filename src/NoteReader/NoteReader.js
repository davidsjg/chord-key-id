import React from "react";
import "./NoteReader.module.css";
import NoteBanner from "./NoteBanner/NoteBanner";

function NoteReader() {
  return (
    <>
      <div className="mainAppContain">
        <NoteBanner />
      </div>
    </>
  );
}
export default NoteReader;
