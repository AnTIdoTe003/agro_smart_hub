import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/DashboardComponents/Navbar";
import Topbar from "./components/DashboardComponents/topBar";
import Dashboard from "./pages/DashboardMain/Dashboard";
import UserProfilePage from "./pages/DashboardMain/userProfile";
import Login from "./pages/DashboardMain/login";
import Chatbot from "./components/DashboardComponents/ChatBot/Chatbot";
import TimerPage from "./pages/DashboardMain/TimerPage";
import WhyUs from "./pages/DashboardMain/WhyUs";
import PricingPage from "./pages/DashboardMain/pricingPage";
import SignUp from "./pages/DashboardMain/SignUp";

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
            <Route path={"/timer"} element={<TimerPage />} />
            {/* <Route path={"/pricing"} element={<PricingPage />} /> */}
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
