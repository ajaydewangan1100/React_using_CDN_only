import React from "react";

// Class Based User component
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      userInfo: {
        name: "DUMMY",
        location: "Default",
      },
    };

    // console.log(this.props.name + " Cunstrctor");
  }

  // ComponentDidMount()

  async componentDidMount() {
    // console.log(this.props.name + " componentDidMount");

    const data = await fetch("https://api.github.com/users/ajaydewangan1100");
    const jsonData = await data.json();

    // console.log(jsonData);
    this.setState({ userInfo: jsonData });
  }

  componentDidUpdate() {
    // console.log(this.props.name + " - ComponentDidUpdate");
  }

  componentWillUnmount() {
    // console.log(this.props.name + " - componentWillUnmount");
  }

  render() {
    // console.log(this.props.name + " render");
    const { name, location, avatar_url } = this.state.userInfo;

    // destrured props
    // const { name, location, contact } = this.props;

    return (
      <div className="p-2 rounded shadow-md w-max flex flex-col hover:scale-105 duration-200 ml-8">
        <img src={avatar_url} alt={name} className="w-48 h-48 mb-3" />
        <h2 className="ml-2 font-bold">Name: {name}</h2>
        <h3 className="ml-2 ">Location : {location ? location : "India"}</h3>
        <h4 className="ml-2 ">Contact : {"contact"}</h4>
      </div>
    );
  }
}

export default UserClass;
