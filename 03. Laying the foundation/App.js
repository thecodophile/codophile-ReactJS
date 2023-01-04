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
// import ReactDOM from "react-dom";
//earlier we have to write like above but in recent upgrade to have to write like below
import ReactDOM from "react-dom/client";

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

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
// in React when we pass multiple children, it should pass inside an array like above.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
