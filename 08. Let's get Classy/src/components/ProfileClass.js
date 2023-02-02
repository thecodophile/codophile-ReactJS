import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //Create State
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log("Child-constructor" + this.props.name);
  }

  componentDidMount() {
    //this is the best palce to make an api call inside classbase components
    console.log("Child-componentDidMount" + this.props.name);
  }

  render() {
    // destructuring
    const { count, count2 } = this.state;

    console.log("Child-Render" + this.props.name);

    return (
      <div>
        <h1>Profile Class Component</h1>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <p>Count:{count}</p>
        <p>Count2:{count2}</p>
        <button
          onClick={() => {
            this.setState({
              count: 1,
              count2: 2,
            });
          }}
        >
          setCount
        </button>
      </div>
    );
  }
}
export default Profile;
