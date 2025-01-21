import React from "react";
import { Link } from "react-router-dom";
import "./NoteSelector.css";

function NoteSelector({ onUpdateState, currIndex }) {
  function handleClick(e) {
    if(currIndex === 'null'){
        return;
    }
    let userPick = e.target.id;
    let testProp2 = "test2";
    onUpdateState(userPick, currIndex);
  }
  function handleClick2(e) {
    let userPick = e.target.id;
    let index = 0;
    onUpdateState(userPick, index);
  }
  return (
    <>
      <div className="noteSelectContain">

      <div className={currIndex === "null" || currIndex === 10 ? 'selectHidden' : 'select'} onClick={handleClick} id="A">A</div>

        {currIndex === "null" && (
          <div className="selectBlank" onClick={handleClick2}>Start</div>
        )}
        {currIndex >= 0 && currIndex !== 10 && currIndex !== null && (
          <div className="selectHidden1" onClick={handleClick}>Start</div>
        )}
        {currIndex === 10 && currIndex !== null && (
          <div className="selectBlank" onClick={handleClick2}>Again!</div>
        )}


      <div className={currIndex === "null" || currIndex === 10 ? 'selectHidden' : 'select'} onClick={handleClick} id="D">D</div>
      <div className={currIndex === "null" || currIndex === 10 ? 'selectHidden' : 'select'} onClick={handleClick} id="B">B</div>
      <div className={currIndex === "null" || currIndex === 10 ? 'selectHidden' : 'select'} onClick={handleClick} id="G">G</div>
      <div className={currIndex === "null" || currIndex === 10 ? 'selectHidden' : 'select'} onClick={handleClick} id="E">E</div>
      <div className={currIndex === "null" || currIndex === 10 ? 'selectHidden' : 'select'} onClick={handleClick} id="C">C</div>
      
      <div className="homeButton">        

            <Link
              to="/"
            >
              <span>Home</span>
            </Link>

      </div>

      <div className={currIndex === "null" || currIndex === 10 ? 'selectHidden' : 'select'} onClick={handleClick} id="F">F</div>

      </div>
    </>
  );
}
export default NoteSelector;
