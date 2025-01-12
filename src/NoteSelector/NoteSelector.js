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
        {currIndex === "null" && (
          <div className="selectHidden" onClick={handleClick} id="A">A</div>
        )}
        {currIndex >= 0 && (
          <div className="select selectA" onClick={handleClick} id="A">
            A
          </div>
        )}
        {currIndex === "null" && (
          <div className="selectBlank" onClick={handleClick2}>
            Start
          </div>
        )}
        {currIndex >= 0 && (
          <div className="selectHidden" onClick={handleClick}>D</div>
        )}
        {currIndex === "null" && (
          <div className="select selectD" onClick={handleClick} id="D"></div>
        )}
        {currIndex >= 0 && (
          <div className="select selectD" onClick={handleClick} id="D">
            D
          </div>
        )}
        {currIndex === "null" && (
          <div className="selectHidden" onClick={handleClick} id="B">B</div>
        )}
        {currIndex >= 0 && (
          <div className="select selectB" onClick={handleClick} id="B">
            B
          </div>
        )}
        {currIndex === "null" && (
          <div className="selectHidden" onClick={handleClick} id="G">G</div>
        )}
        {currIndex >= 0 && (
          <div className="select selectG" onClick={handleClick} id="G">
            G
          </div>
        )}
        {currIndex === "null" && (
          <div className="selectHidden" onClick={handleClick} id="E">E</div>
        )}
        {currIndex >= 0 && (
          <div className="select selectE" onClick={handleClick} id="E">
            E
          </div>
        )}
        {currIndex === "null" && (
          <div className="selectHidden" onClick={handleClick} id="C">C</div>
        )}
        {currIndex >= 0 && (
          <div className="select selectC" onClick={handleClick} id="C">
            C
          </div>
        )}
        <div className="select selectBlank"></div>
        {currIndex === "null" && (
          <div className="selectHidden" onClick={handleClick} id="F">F</div>
        )}
        {currIndex >= 0 && (
          <div className="select selectF" onClick={handleClick} id="F">
            F
          </div>
        )}
      </div>
    </>
  );
}
export default NoteSelector;
