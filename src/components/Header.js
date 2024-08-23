import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

// Header component
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // let btnName = "Login";

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="Login-btn"
              onClick={() => setIsLoggedIn(!isLoggedIn)}>
              {isLoggedIn ? "Logout " : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
