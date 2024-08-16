## REACT

#### What i studied till now

 - Hello world
 - hello world - using JS
 - hello world - using React & ReactDOM (using CDN)
  (
    `<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>`
    `<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>`
  )
  Get CDN links from here (`https://legacy.reactjs.org/docs/cdn-links.html`)
 - We learnt how to bring React on our code
 - We extracted same code on `app.js` file
 - We learnt that any created react element is an object - **h1** (`const h1 = React.createElement(
  "h1",{}, "I am H1")`)
 - And after render it becomes HTML element (`root.render(parent);`)
 - **createElement** takes 3 argument - `React.createElement("h2", {id:"new_h2"}, "Text or child element"),`
   1. Tag
   2. attributes as object
   3. text or child elements
  (If we have to give multiple children we need to pass as an array)
    ```
    React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "parent -> child > h1 -> I am h1"),
    React.createElement("h2", {}, "parent -> child > h1 -> I am h2"),
    ])
    ```
  - On `root.render` it is replacing all the previous texts or child of root
  - We can use react just in small portion of our app (like header or footer or even card) 