import React from "react";
import { GITHUB_USER_API } from "../utls/constants";
import { UserContext } from "../utls/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch(GITHUB_USER_API);
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    // console.log(json);
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    // console.log("componentWillUnmount");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(name, location);
    return (
      <div className="user-card">
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : 2k23abhayraj@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
