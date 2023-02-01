import { useState } from "react";
import Logo from "../assets/foodvilla.jpg";
import { Link } from "react-router-dom";

const logedInUser = () => {
  return true;
};

export const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        // src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
        src={Logo}
        alt="logo image"
      />
    </a>
  );
};

const HeaderComponent = () => {
  const [title, setTitle] = useState("Food Villa");

  // console.log("rerender");
  //React re-render the whole component when the state variable will change .

  const [isLogedIn, setIsLogedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>

      <button
        onClick={() => {
          setTitle("Food Plaza");
        }}
      >
        Change Title
      </button>

      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
      {isLogedIn ? (
        <button onClick={() => setIsLogedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLogedIn(true)}>Login</button>
      )}
    </div>
  );
};

//default export
export default HeaderComponent;
