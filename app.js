// 
const heading = React.createElement("h1", {id:"heading", xxx:"aaa"}, "MSG From React!");

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);