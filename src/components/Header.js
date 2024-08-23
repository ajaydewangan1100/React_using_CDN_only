import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

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
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
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
