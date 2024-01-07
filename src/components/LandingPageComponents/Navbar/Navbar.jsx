import  { useState } from "react";
import Logo from "../../../images/final-logo.png";
import "./style.scss";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(1);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        {" "}
        <img src={Logo} alt="Company Logo" />
      </div>
      <ul className="nav-list">
        {["Home", "About", "Products", "WhyUs", "Help"].map((index) => (
          <li
            key={index}
            className={`nav-item ${activeLink === index ? "active" : ""}`}
            onClick={() => handleLinkClick(index)}
          >
            <a href="#">{index}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
