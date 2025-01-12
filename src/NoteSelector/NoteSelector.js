import React from "react";
import "./NoteSelector.css";

function NoteSelector({ onUpdateState, currIndex }) {
  function handleClick(e) {
    if(currIndex === 'null'){
        return;
    }
    let userPick = e.target.id;
    let testProp2 = "test2";
    onUpdateState(userPick, testProp2);
  }
  function handleClick2(e) {
    let userPick = e.target.id;
    let index = 0;
    onUpdateState(userPick, index);
  }
  return (
    <>
      <div className="noteSelectContain">

      <div className={currIndex === "null" ? 'selectHidden' : 'select'} onClick={handleClick} id="A">A</div>

        {currIndex === "null" && (
          <div className="selectBlank" onClick={handleClick2}>Start</div>
        )}
        {currIndex >= 0 && currIndex !== 10 && currIndex !== null && (
          <div className="selectHidden" onClick={handleClick}>Start</div>
        )}
        {currIndex === 10 && currIndex !== null && (
          <div className="selectBlank" onClick={handleClick2}>Again!</div>
        )}


      <div className={currIndex === "null" ? 'selectHidden' : 'select'} onClick={handleClick} id="D">D</div>
      <div className={currIndex === "null" ? 'selectHidden' : 'select'} onClick={handleClick} id="B">B</div>
      <div className={currIndex === "null" ? 'selectHidden' : 'select'} onClick={handleClick} id="G">G</div>
      <div className={currIndex === "null" ? 'selectHidden' : 'select'} onClick={handleClick} id="E">E</div>
      <div className={currIndex === "null" ? 'selectHidden' : 'select'} onClick={handleClick} id="C">C</div>
      <div className="selectHidden">Hold</div>
      <div className={currIndex === "null" ? 'selectHidden' : 'select'} onClick={handleClick} id="F">F</div>

      </div>
    </>
  );
}
export default NoteSelector;
