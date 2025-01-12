import React from "react";
import { useState } from "react";
import "./Banner.css";

function Banner() {
  const [clickCounter, setClickCounter] = useState(0);

  let sevensArray = ["C7", "G7", "D7", "A7", "E7", "B7", "F#7"];

  shuffle(sevensArray);

  console.log(sevensArray);

  let displayChord1 = "";

  sevensArray.forEach((ele, index) => {
    console.log(clickCounter);
    if (clickCounter === index) {
      displayChord1 = ele;
    }
  });

  function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  return (
    <>
      <div className="bannerContain">
        <div className="note note2"></div>
        <div className="note note1">{displayChord1}</div>
        <div className="note note3"></div>
      </div>
    </>
  );
}
export default Banner;
