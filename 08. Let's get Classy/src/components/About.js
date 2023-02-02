import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import { Component } from "react";

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is the Namste React Live course chapter 07 - Finding the path</p>
      <Outlet />
      <ProfileClass name="Somnath" age="20" />
    </div>
  );
};

class AboutClass extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent-Constructor");
  }

  componentDidMount() {
    //Best place to make a api call
    // console.log("Parent-compnentDidMount");
  }

  render() {
    // console.log("Parent-render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          This is the Namste React Live course chapter 07 - Finding the path
        </p>
        <Outlet />
        <ProfileClass name="First Child" age="10" />
      </div>
    );
  }
}

// i am exporting classbase compnent
export default AboutClass;

/**
 * Parent Constructor
 * Parent Render
 *  First Child Constructor
 *  First Child Render
 *  Second Child Constructor
 *  Second Child Render
 *  First Child componentDidMount
 *  Second Child componentDidMount
 * Parent ComponentDidMount
 *
 *
 */
