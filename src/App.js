import "./App.css";
import Banner from "./Banner/Banner";
import NoteSelector from "./NoteSelector/NoteSelector";
import { useState, useEffect } from "react";

function App() {
  const [clickCounter, setClickCounter] = useState(0);
  const [noteBanner, setNoteBanner] = useState();
  const [scoreboard, setScoreboard] = useState("");
  const [currNum, setCurrNum] = useState(0);
  const [shuffArr, setShuffArr] = useState([]);



  useEffect(() => {
    let sevensArray = ["C7", "G7", "D7", "A7", "E7", "B7", "F#7"];
    shuffle(sevensArray)
    setShuffArr(sevensArray)
    console.log(shuffArr)
    console.log(shuffArr[0])
    setNoteBanner(shuffArr[0])
  }, []);

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


  function handleUpdateState() {
    console.log("sup");
    setScoreboard('test')
    setCurrNum(currNum + 1);
    let currDisp = shuffArr[currNum];
    console.log(currDisp)
    setNoteBanner(shuffArr[currNum])
  }


  return (
    <div className="mainAppContain">
      <Banner scoreboard={scoreboard} displayChord1={noteBanner}/>
      <NoteSelector onUpdateState={handleUpdateState}/>
    </div>
  );
}

export default App;
