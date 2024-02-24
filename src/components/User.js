import { useState } from "react";

const User = (props) => {
  const { location } = props;
  const [count1] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h1>Count1 : {count1}</h1>
      <h1>Count2 : {count2}</h1>
      <h2>Name : {props.name}</h2>
      <h3>Location : {location}</h3>
      <h4>Contact : 2k23abhayraj@gmail.com</h4>
    </div>
  );
};

export default User;
