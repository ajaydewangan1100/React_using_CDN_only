// Getting root
const root = ReactDOM.createRoot(document.getElementById("root"));

// creating element
// const heading = React.createElement("h1", {id:"heading", xxx:"aaa"}, "MSG From React!");

// console.log(heading);
// root.render(heading);

// Nested element structure
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "parent -> child > h1 -> I am h1"),
    React.createElement("h2", {}, "parent -> child > h1 -> I am h2"),
  ])
);

// rendering element
root.render(parent);
