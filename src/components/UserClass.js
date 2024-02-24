import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 1,
      count2: 2,
    };
  }
  render() {
    const { location } = this.props;
    const { count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Count1 : {this.state.count1}</h1>
        <h1>Count2 : {count2}</h1>
        <h2>Name : {this.props.name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : 2k23abhayraj@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
