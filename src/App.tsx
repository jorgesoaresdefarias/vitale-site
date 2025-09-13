import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import KnowPage from "./pages/KnowPage";
import AboutPage from "./pages/AboutPage";
import PlansPage from "./pages/PlansPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* "/" is the initial route */}
        <Route path="/" element={<><HomePage /><KnowPage /><AboutPage /><PlansPage /></>} />
      </Routes>
    </Router>
  );
}

export default App;