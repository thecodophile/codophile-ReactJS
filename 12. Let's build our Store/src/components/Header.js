import { useState, useContext } from "react";
import Logo from "../assets/foodvilla.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Title = () => {
  return (
    <a href="/">
      <img className="h-24 p-1" src={Logo} alt="logo image" />
    </a>
  );
};

const HeaderComponent = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-rose-200 shadow-lg">
      <Title />

      <div>
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">Cart- {cartItems.length} items</li>
        </ul>
      </div>
      <h2>{isOnline ? "🟢" : "🔴"}</h2>
      <p className="p-2">{user.name}</p>
      {isLogedIn ? (
        <button onClick={() => setIsLogedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLogedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default HeaderComponent;
