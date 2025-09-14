import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import KnowPage from "./pages/KnowPage";
import AboutPage from "./pages/AboutPage";
import PlansPage from "./pages/PlansPage";
import AttentionPage from "./pages/AttentionPage";
import EndPage from "./pages/EndPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* "/" is the initial route */}
        <Route path="/" element={<><HomePage /><KnowPage /><AboutPage /><PlansPage /><AttentionPage /><EndPage /></>} />
      </Routes>
    </Router>
  );
}

export default App;