// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("parent componentDidMount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Class Based </h1>
        <h2>This is react series</h2>
        <UserClass name={"Abhay(class)"} location={"West Bengal"} />
      </div>
    );
  }
}

export default About;
