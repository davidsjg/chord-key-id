import React from "react";
import "./NoteReader.module.css";
import NoteBanner from "./NoteBanner/NoteBanner";
import { useState, useEffect } from "react";
import NoteSelector from "../SevenGame/NoteSelector/NoteSelector";



function NoteReader() {
  const [clickCounter, setClickCounter] = useState(0);
  const [noteBanner, setNoteBanner] = useState();
  const [scoreboard, setScoreboard] = useState("-");
  const [currNum, setCurrNum] = useState("null");
  const [currStaff, setCurrStaff] = useState("null");
  const [shuffArr, setShuffArr] = useState([]);
  const [userSelect, setUserSelect] = useState("");
  const [startOver, setStartOver] = useState(false);

  useEffect(() => {
    let masterArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    shuffle(masterArr);
    setShuffArr(masterArr);
    setStartOver(false);
    setScoreboard('-')
    setCurrNum('null')
  }, [startOver]);

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


  

  function handleUpdateState2(prop1, prop2) {
    console.log(shuffArr)
    console.log(prop1)
    console.log(prop2)

    if (prop2 === 0) {
      setCurrNum(0);
      setCurrStaff(shuffArr[0]);
      return;
    } else if (prop2 > 0) {
      setCurrNum(currNum+1)
    }
    setCurrStaff(shuffArr[currNum])

  }


  return (
    <>
      <div className="mainAppContain">
        <NoteBanner currNum={currStaff}  />
        <NoteSelector onUpdateState={handleUpdateState2} currIndex={currStaff} />
      </div>
    </>
  );
}
export default NoteReader;
