import React from "react";
import "./NoteSelector.css";

function NoteSelector() {
  function handleClick() {
    console.log("sup");
  }
  return (
    <>
      <div className="noteSelectContain">
        <div className="select selectA" onClick={handleClick}>
          A
        </div>
        <div className="select selectBlank"></div>
        <div className="select selectD" onClick={handleClick}>
          D{" "}
        </div>
        <div className="select selectB" onClick={handleClick}>
          B{" "}
        </div>
        <div className="select selectG" onClick={handleClick}>
          G{" "}
        </div>
        <div className="select selectE" onClick={handleClick}>
          E{" "}
        </div>
        <div className="select selectC" onClick={handleClick}>
          C{" "}
        </div>
        <div className="select selectBlank" ></div>
        <div className="select selectF" onClick={handleClick}>
          F
        </div>
      </div>
    </>
  );
}
export default NoteSelector;
