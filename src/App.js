import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import Scores from "./pages/Scores";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/scores" element={<Scores />} />
      </Routes>
    </Router>
  );
};

export default App;
