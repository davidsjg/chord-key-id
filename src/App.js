import About from "./About/About";
import MainDisplay from "./MainDisplay";
import Header from "./Header/Header";
import SevenGame from "./SevenGame/SevenGame";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectorPage from "./SelectorPage/SelectorPage";
import NoteReader from "./NoteReader/NoteReader";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainDisplay />}>
          <Route path="/" element={<SelectorPage />} />
          <Route path="/sevenGame" element={<SevenGame />} />
          <Route path="/noteReader" element={<NoteReader />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
