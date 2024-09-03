import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// Header component
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // let btnName = "Login";

  // Using Hook for online status
  const isOnline = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // Subscribing to store
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="z-50 flex items-center justify-between bg-yellow-300 shadow-md sticky top-0 bg-opacity-35 px-4 h-28">
      <div className="logo-container">
        <img src={LOGO_URL} className="w-32 h-[80%] rounded-md" />
      </div>
      <div className="p-4">
        <ul className="flex m-4 items-center gap-6 p-4 ">
          <li>{isOnline ? "Online🟢😎" : "Offline🔴🥲"}</li>
          <li className="">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
          <li className="font-bold text-lg ">Cart({cartItems.length} items)</li>
          <li>
            <button
              className="px-3 py-1 rounded-lg text-gray-200 bg-violet-600 hover:bg-violet-700"
              onClick={() => setIsLoggedIn(!isLoggedIn)}>
              {isLoggedIn ? "Logout " : "Login"}
            </button>
          </li>
          <li className="font-bold text-xs">
            {isLoggedIn && loggedInUser && loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
