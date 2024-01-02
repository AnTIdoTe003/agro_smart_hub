import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Topbar from "./components/topBar";
import Dashboard from "./pages/Dashboard";
import UserProfilePage from "./pages/userProfile";
import Login from "./pages/login";
import Chatbot from "./components/ChatBot/Chatbot";
import TimerPage from "./pages/TimerPage";
import WhyUs from "./pages/WhyUs";
import PricingPage from "./pages/pricingPage";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <div className="app-page">
        <Navbar />
        <div className="pages">
          <Topbar />
          <Routes>
            <Route path={"/"} element={<Dashboard />} />
            <Route path={"/profile"} element={<UserProfilePage />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/timer"} element={<TimerPage />} />
            <Route path={"/pricing"} element={<PricingPage />} />
            <Route path={"/WhyUs"} element={<WhyUs />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/signup"} element={<SignUp />} />
          </Routes>
        </div>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
