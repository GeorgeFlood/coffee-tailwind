import "./input.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Plan from "./pages/Plan";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/plan" element={<Plan />} />
        <Route exact path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
