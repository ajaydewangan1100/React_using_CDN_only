import React from "react";

// Class Based User component
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      count: 0,
      count2: 2,
    };

    console.log(this.props.name + " Cunstrctor");
  }

  // ComponentDidMount()

  componentDidMount() {
    console.log(this.props.name + " componentDidMount");
  }

  render() {
    console.log(this.props.name + " render");

    // destrured props
    const { name, location, contact } = this.props;

    return (
      <div className="user-card">
        {/* printing state data here */}
        <h1>Count2 : {this.state.count2}</h1>
        <button
          onClick={() => {
            this.setState({ count2: this.state.count2 + 2 });
          }}>
          Count Increase
        </button>

        {/* Printing props data here */}
        <h2>Name: {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
