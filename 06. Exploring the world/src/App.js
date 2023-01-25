import React from "react";
import ReactDOM from "react-dom/client";
//Default Import
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
//Named Import
// import { Title } from "./components/Header";

// we can write like this
// import HeaderComponent, { Title } from "./components/Header";

/**
 * "{Title}"-> is not obj destructuring. we call it extracting
 * cause->if is it obj destructuring then we can also do like this->
 * import obj from "./components/Header";
 * const {Title} = obj // but this wont work, even we can't do like this-
 * obj.Title // wom't work
 *
 * // But suppose if you export everything then we can like this-
 * import * as Obj from "./components/Header";
 * Obj.Title //then it will work
 */

const AppLayout = () => {
  return (
    <React.Fragment>
      {/* <Title /> */}
      <HeaderComponent />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
