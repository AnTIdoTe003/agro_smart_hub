import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Topbar from "./components/topBar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="app-page">
        <Navbar />
        <div className="pages">
          <Topbar />
          <Routes>
            <Route path={"/"} element={<Dashboard />} />
            <Route path={"/home"} element={<Home />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
