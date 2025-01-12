import "./App.css";
import Banner from "./Banner/Banner";
import NoteSelector from "./NoteSelector/NoteSelector";
import { useState, useEffect } from "react";
import compare from "./checkScore";

function App() {
  const [clickCounter, setClickCounter] = useState(0);
  const [noteBanner, setNoteBanner] = useState();
  const [scoreboard, setScoreboard] = useState("-");
  const [currNum, setCurrNum] = useState('null');
  const [shuffArr, setShuffArr] = useState([]);
  const [userSelect, setUserSelect] = useState('');



  useEffect(() => {
    let sevensArray = ["C7", "G7", "D7", "A7", "E7", "B7", "F#7"];
    shuffle(sevensArray)
    setShuffArr(sevensArray)
  }, []);

  console.log(shuffArr)

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
    console.log(prop2)
    if(prop2 === 0){
      setCurrNum(0)
      setNoteBanner(shuffArr[0])
      return;
    }
    console.log(prop1);
    setScoreboard('test')
    setCurrNum(currNum + 1);
    setNoteBanner(shuffArr[currNum + 1])
  }


  return (
    <div className="mainAppContain">
      <Banner scoreboard={scoreboard} displayChord1={noteBanner}/>
      <NoteSelector onUpdateState={handleUpdateState} currIndex={currNum}/>
    </div>
  );
}

export default App;
