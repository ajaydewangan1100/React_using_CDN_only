import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => HTML element(rendred)

// Old React Syntax to create element -
const heading = React.createElement("h1", { id: "abc" }, "Heading 1");

// New React Syntax to create element with JSX -
const jsxHeading = <h1 id="xyz">Heading using JSX</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
