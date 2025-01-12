import React from "react";
import "./NoteSelector.css";

function NoteSelector() {
  return (
    <>
      <div className="noteSelectContain">
        <div className="select selectA">A</div>
        <div className="select selectBlank"></div>
        <div className="select selectD">D</div>
        <div className="select selectB">B</div>
        <div className="select selectG">G</div>
        <div className="select selectE">E</div>
        <div className="select selectC">C</div>
        <div className="select selectBlank"></div>
        <div className="select selectF">F</div>
      </div>
    </>
  );
}
export default NoteSelector;
