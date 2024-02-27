import { LOGO_URL } from "../utls/constants";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utls/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // useEffect(() => {}, [btnNameReact]); since react cannot find useOnlineStatus hook
  const status = useOnlineStatus();

  return (
    <div className="header">
      <div>
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status :{status ? `✅` : `🔴`}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery </Link>
          </li>
          <li>Cart</li>
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
