import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Level2Form from "./components/tdor/thirdday/Level2Form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/level2form" element={<Level2Form />} />
      </Routes>
    </div>
  );
}

export default App;
