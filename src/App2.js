import About from "./About/About";
import Header from "./Header/Header";
import SevenGame from "./SevenGame/SevenGame";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App2() {
  return (
    <>
      <div >
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App2;
