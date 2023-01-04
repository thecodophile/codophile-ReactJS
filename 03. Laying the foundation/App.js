/* Bundler
 * Parcel>>
 * Created a server for you
 * HMR -> Hot Module Replacement - parcel is doing HMR
 * File Watcher Alogorithm -> use by parcel.
 * Bundling
 * Minification
 *    remember it doesn't minify in our dev build, it minify code in our production build.
 * Cleaning our code.
 * Image optimization
 *    if images comes form backend then it doesn't. images should in your project.
 * Caching while development
 * Compression
 * Compatible with older version of browser -polyfil
 * enable https on development
 * parcle manage port number also.
 * consistant hashing algorithm.
 * parcel needs zero configaration.
 * Tree Shaking -> removing unwanted codes.
 */

import React from "react";
import ReactDOM from "react-dom/client";

/*
const heading1 = React.createElement(
  "h1",
  { key: "r1", id: "title1", className: "hey1" },
  "Heading1 form percel"
);

const heading2 = React.createElement(
  "h2",
  {
    key: "r2",
    id: "title2",
    className: "hey2",
    // and not only id or class name we can  pass any props inside this curly braces.
    hello: "world",
  },
  "Heading2"
);

console.log(typeof heading1); // this console.log will remove by bable plugin transfrom remove console package.

//React.createElement => object => HTML(DOM)

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
// in React when we pass multiple children, it should pass inside an array like above.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
*/

/**
 * suppose we have a big html structure->
 * 
 *  <div class="header">
        <h1>Namaste React</h1>
        <ul>
            <li>About us</li>
            <li>Support</li>
            <li>Home</li>
        </ul>
    </div>
 */

const header = React.createElement("div", { className: "header" }, [
  React.createElement("h1", { key: "h1" }, "Namaste React"),
  React.createElement("ul", { key: "ul1" }, [
    React.createElement("li", { key: "li01" }, "About Us"),
    React.createElement("li", { key: "li02" }, "Support"),
    React.createElement("li", { key: "li03" }, "Home"),
  ]),
]);

// JSX ->
//JSX => React.createElement => object => HTML(DOM)

// this is a react element
const header2 = (
  <div className="header">
    <h1>Namaste React</h1>
    <ul>
      <li>About us</li>
      <li>Support</li>
      <li>Home</li>
    </ul>
  </div>
);

// React Components-> 2 types
//functional components -> NEW
//Class based components -> OLDER
// component name should start with a captial letter. It's not mandatory but this is good practice.

const HeaderComponent = () => {
  return (
    <div>
      <h1>Namaste React functional component</h1>
      <p>I am learning react functional components</p>
    </div>
  );
};

// we can skip return in functional component it will same. like below
const Codophile = () => (
  <div>
    {header2}
    <HeaderComponent />
    {HeaderComponent()}
    {/* at the end of the day react functional componnent is a normal javascript function . so it works */}
    <img src="https://via.placeholder.com/200" alt="placeholder" />
    <p>I am learning react functional components</p>
    {/* {console.log("we can do any js operation inside this")} */}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(header2);//React element render way
// root.render(<HeaderComponent />); //react components render like this
root.render(<Codophile />);
