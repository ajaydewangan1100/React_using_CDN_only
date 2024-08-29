import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <p>
//         This is a simple Swiggy Clone for Learning purpose, also used real time
//         API of swiggy.
//       </p>
//       {/* <User name={"Ajay"} location={"Pune"} contact={"@ajaydewangan1100"} /> */}

//       <h1>Rendering Class Components</h1>

//       <UserClass
//         name={"1st "}
//         location={"Pune"}
//         contact={"@ajaydewangan1100"}
//       />
//       <UserClass
//         name={"2nd "}
//         location={"Pune"}
//         contact={"@ajaydewangan1100"}
//       />
//     </div>
//   );
// };

// export default About;

// ------------------------------------------------------------------------------------------------

class AboutComponent extends Component {
  constructor(props) {
    super(props);
    console.log("Parent" + " Cunstrctor");
  }

  componentDidMount() {
    console.log("Parent" + " componentDidMount");
  }

  render() {
    console.log("Parent" + " render");

    return (
      <div className="p-4 flex flex-col gap-4">
        <h1 className="font-bold text-2xl">About</h1>
        <p className="ml-4">
          This is a simple Swiggy Clone for Learning purpose, also used real
          time API of swiggy.
        </p>
        {/* <User name={"Ajay"} location={"Pune"} contact={"@ajaydewangan1100"} /> */}

        <h1 className="ml-4">Rendering Class Components</h1>

        <UserClass
          name={"1st "}
          location={"Pune"}
          contact={"@ajaydewangan1100"}
        />
        {/* <UserClass
          name={"2nd "}
          location={"Pune"}
          contact={"@ajaydewangan1100"}
        /> */}
      </div>
    );
  }
}

export default AboutComponent;
