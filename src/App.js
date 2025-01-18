import About from "./About/About";
import App2 from "./App2";
import Header from "./Header/Header";
import SevenGame from "./SevenGame/SevenGame";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App2 />}>
          <Route index element={<SevenGame />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
