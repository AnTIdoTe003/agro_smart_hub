import React from "react";
import "./style.scss";
import Navbar from "../../components/LandingPageComponents/Navbar/Navbar";
import WelcomeSection from "../../components/LandingPageComponents/WelcomeSection/WelcomeSection";
import ThirdSection from "../../components/LandingPageComponents/ThirdSection/ThirdSection";
import ContactForm from "../../components/LandingPageComponents/ContactForm/ContactForm";
import Reviews from "../../components/LandingPageComponents/Reviews/Reviews";
import Instagram from "../../components/LandingPageComponents/Instagram/Instagram";
import Youtube from "../../components/LandingPageComponents/Youtube/Youtube";
import Blog from "../../components/LandingPageComponents/Blog/Blog";
import OurSolutions from "../../components/LandingPageComponents/Our-Solutions";


const LandingPage = () => {
  return (
    <div className="landing-page-main">
      <Navbar />
      <WelcomeSection />
      <ThirdSection />
      <OurSolutions/>
      <Reviews />
      <Instagram />
      <Youtube />
      <Blog />
      <ContactForm />
    </div>
  );
};

export default LandingPage;
