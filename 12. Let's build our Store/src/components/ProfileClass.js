import React from "react";
import UserContext from "../utils/UserContext";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //Create State
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Loation",
      },
    };
    console.log("Child-constructor" + this.props.name);
  }

  async componentDidMount() {
    //Best place to make a api call
    const data = await fetch("https://api.github.com/users/thecodophile");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
    console.log("Child-componentDidMount" + this.props.name);
  }

  componentDidUpdate() {
    console.log("Old component Update");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }

  render() {
    console.log("Child-Render" + this.props.name);
    //I just do destructuring and optional chaining
    const { avatar_url, name, location } = this?.state?.userInfo;
    return (
      <div>
        <h1>Profile Class Component</h1>

        <UserContext.Consumer>
          {({ user }) => <h4 className="font-bold text-xl">{user.name}</h4>}
        </UserContext.Consumer>

        <img src={avatar_url} />
        <p>Name: {name}</p>
        <p>Location: {location}</p>
      </div>
    );
  }
}
export default Profile;

/**
 * Render phase***************
 * Parent Constructor
 * parent Render
 * Child Constructor
 * Child Render
 *
 * Commit Phase***************
 * DOM is updated API call
 * json loged
 * Child compomentDidMount
 * Parent componentDidMount
 *
 */
