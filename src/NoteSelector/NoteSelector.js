import React from "react";
import "./NoteSelector.css";

function NoteSelector({ onUpdateState, currIndex }) {
  function handleClick(e) {

    let userPick = e.target.id;
    let testProp2 = 'test2';
    onUpdateState(userPick, testProp2);
  }
  return (
    <>
      <div className="noteSelectContain">
        <div className="select selectA" onClick={handleClick} id='A'>
          A
        </div>
        {currIndex === 0 && <div className="select selectBlank">Start</div>}
        {currIndex > 0 && <div className="select selectBlank"></div>}

        <div className="select selectD" onClick={handleClick} id='D'>
          D
        </div>
        <div className="select selectB" onClick={handleClick} id='B'>
          B
        </div>
        <div className="select selectG" onClick={handleClick} id='G'>
          G
        </div>
        <div className="select selectE" onClick={handleClick} id='E'>
          E
        </div>
        <div className="select selectC" onClick={handleClick} id='C'>
          C
        </div>
        <div className="select selectBlank"></div>
        <div className="select selectF" onClick={handleClick} id='F'>
          F
        </div>
      </div>
    </>
  );
}
export default NoteSelector;
