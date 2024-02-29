import { LOGO_URL } from "../utls/constants";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utls/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // useEffect(() => {}, [btnNameReact]); since react cannot find useOnlineStatus hook
  const status = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div>
        <img src={LOGO_URL} alt="logo" className="w-56" />
      </div>
<<<<<<< HEAD
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status :{status ? `✅` : `🔴`}</li>
          <li className="px-4">
=======
      <div className="nav-items">
        <ul>
          <li>Online Status :{status ? `✅` : `🔴`}</li>
          <li>
>>>>>>> 3eb3e17787f925d6b43ac625b44f0cd50e078be6
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contactus">Contact Us</Link>
          </li>
<<<<<<< HEAD
          <li className="px-4">
            <Link to="/grocery">Grocery </Link>
          </li>
          <li className="px-4">Cart</li>
=======
          <li>
            <Link to="/grocery">Grocery </Link>
          </li>
          <li>Cart</li>
>>>>>>> 3eb3e17787f925d6b43ac625b44f0cd50e078be6
          <li>
            <button
              className="login"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
