import React from "react";
import "./DispNote.css";

function DispNote({ number, currNum }) {
  let temp = currNum;

  if (number === 0 && temp === number) {
    return (
      <>
        <div className={`zeroNote allNote note` + number}>{"  "}O{"  "}</div>
      </>
    );
  }
  if ((number === 2 && temp === number) || (number === 14 && temp === number)) {
    return (
      <>
        <div className={`selectedNote allNote note` + number}>{"  "}O{"  "}</div>
      </>
    );
  }

  if (number > 2 && number % 2 === 0 && number < 13 && number === temp) {
    return (
      <>
        <div className={`selectedNote allNote note` + number}>
          {"     "}O{"     "}
        </div>
      </>
    );
  }

  if (number > 2 && number % 2 === 0 && number < 13 && number !== temp) {
    return (
      <>
        <div className={`dispNote allNote note` + number}>
          {"                     "}
        </div>
      </>
    );
  }

  if (number % 2 === 1 && number < 13 && number === temp) {
    return (
      <>
        <div className={`selectedOdd allNote note` + number}>O</div>
      </>
    );
  }

  if (number === 16 && temp === number) {
    return (
      <>
        <div className={`selectedNote sixteenNote allNote note` + number}>
          O
        </div>
      </>
    );
  }

  return (
    <>
      <div className={`blankNote note` + number}>{"            "}</div>
    </>
  );
}
export default DispNote;
