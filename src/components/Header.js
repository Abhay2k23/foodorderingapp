import { LOGO_URL } from "../utls/constants";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import useOnlineStatus from "../utls/useOnlineStatus";
import { UserContext } from "../utls/UserContext";
import { useSelector, useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // useEffect(() => {}, [btnNameReact]); since react cannot find useOnlineStatus hook
  const status = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div>
        <img src={LOGO_URL} alt="logo" className="w-56" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status :{status ? `✅` : `🔴`}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery </Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="./cart">🛒 ({cartItems.length} items )</Link>
          </li>
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
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
