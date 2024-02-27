// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About Class Based </h1>
        <h2>This is react series</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
