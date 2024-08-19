import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => HTML element(rendred)

// Old React Syntax to create element -
const heading = React.createElement("h1", { id: "abc" }, "Heading 1");

// New React Syntax to create element with JSX -
const jsxHeading = <h1 id="xyz">Heading using JSX</h1>;
console.log(jsxHeading);

const FuncHeading = () => <h1 id="xyz">This is Component composition</h1>;

// Component composition
const FunCompHeading = () => {
  return (
    <div>
      <FuncHeading />
      <h1>Heading - using Function Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunCompHeading />);
