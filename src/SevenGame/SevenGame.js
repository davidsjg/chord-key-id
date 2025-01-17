import "./SevenGame.css";

import NoteSelector from "./NoteSelector/NoteSelector";
import { useState, useEffect } from "react";
import compare from "../checkScore";
import Banner from "./Banner/Banner";

function SevenGame() {
  const [clickCounter, setClickCounter] = useState(0);
  const [noteBanner, setNoteBanner] = useState();
  const [scoreboard, setScoreboard] = useState("-");
  const [currNum, setCurrNum] = useState("null");
  const [shuffArr, setShuffArr] = useState([]);
  const [userSelect, setUserSelect] = useState("");
  const [startOver, setStartOver] = useState(false);

  useEffect(() => {
    let sevensArray = ["C7", "G7", "D7", "A7", "E7", "B7", "F#7"];
    shuffle(sevensArray);
    setShuffArr(sevensArray);
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

  function handleUpdateState(prop1, prop2) {

    if (compare(prop1, noteBanner) && currNum === 6) {
      setScoreboard("correct!");
      setCurrNum(10);
      console.log('game over')

    }
    if (prop2 === 0) {
      setCurrNum(0);
      setNoteBanner(shuffArr[0]);
      return;
    }

    if (compare(prop1, noteBanner) && currNum !== 6) {
      setScoreboard("correct!");
      setNoteBanner("-");
      setTimeout(() => {
        setCurrNum(currNum + 1);
        setNoteBanner(shuffArr[currNum + 1]);
        setScoreboard("-");
      }, 1000); // 1000 milliseconds = 1 second
    } else if (currNum === 6) {
      return;
    } else {
      setScoreboard("try again!");
    }
  }

  return (
    <div className="mainAppContain">
      <Banner scoreboard={scoreboard} displayChord1={noteBanner} />
      <NoteSelector onUpdateState={handleUpdateState} currIndex={currNum} />
    </div>
  );
}

export default SevenGame;
