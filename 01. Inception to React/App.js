// const heading = React.createElement("h1", { id: "title", className: "hey" }, "Namaste Everyone!");

// console.log(heading)
// //If we console.log the heading we can see the heading is an object.

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // Passing a react element inside the root
// root.render(heading);

//................................................
const heading1 = React.createElement(
  "h1",
  { id: "title1", className: "hey1" },
  "Heading1"
);

const heading2 = React.createElement(
  "h2",
  { id: "title2", className: "hey2" },
  "Heading2"
);

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
// in React when we pass multiple children, it should pass inside an array like above.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
