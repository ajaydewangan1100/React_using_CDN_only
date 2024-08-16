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

### NPM

*npm not stands for Node Package Manager*
(It manages packages for project but not stand like that)

- `npm init` ()
  *This will ask many things*
  - package name (any name of project you are creating)
  - version (default 1.0.0)
  - description (any description)
  - entry point (like app.js)
  - test command (like jest)
  - git repoistory (on my it shows my already added repo - https://github.com/ajaydewangan1100/React_using_CDN_only.git)
  - keywords (any keyword, no need to put)
  - author (name of the person who is working on project)
  - license (ISC) (no need to put)
  - IS this OK? (yes) (enter)
  
### BUNDLER
*Bundeles the app/package *
example
- webpack (use by - create-react-app)
- parcel (easy to configure)
- vite

*I will use `parcel`*, **Comes as a node package**

Process

- `npm install -D parcel` (installed as dev dependencies)

2 types of dependencies are there

  1. **dev dependencies** - require under development
  2. Normal dependencies used in production also



- I can see devDependencies on package.json -
  ```
  "devDependencies": {
    "parcel": "^2.12.0"
  }
  ```
  *On version `^2.12.0` what is the meaning of **caret(^)** symbol*
  *Sometime it will be **tilde(~)** like - `~2.12.0`

  **caret(^)** - with this, npm will automatically do update on package if minor update will come (`2.12.0` -> `2.12.1`)

  **tilde(~)** - with this, npm will automatically do update on package if minor update will come and also for major updates (`2.12.0` -> `3.0.0`)
  
- A file also created - `package-lock.json`
  (This file keeps track of exact version installed on package)
  (*I serached parcel under `package-lock.json` and saw exact version of parcel along with integrity hash*)

- **node-modules** also created contains dependecies/packages which needs for parcel (or we can say parcel also have other dependencies)
  (We call that dependencies - **transitive dependencies**)

- Created a `.gitignore` and put names of files no need to push on github

- we don't need to push node-modules because we can install all dependencies just by running - `npm install`

