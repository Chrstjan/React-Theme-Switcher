import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import { useImages } from "./hooks/useImages";
import { LandingPage } from "./pages/LandingPage";
import { AboutPage } from "./pages/AboutPage";
import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
