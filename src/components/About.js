import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is react series</h2>
      <User name={"Abhay(functional)"} location={"West Bengal"} />
      <UserClass name={"Abhay(class)"} location={"West Bengal"} />
    </div>
  );
};
export default About;
