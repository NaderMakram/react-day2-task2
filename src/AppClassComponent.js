import React from "react";
import UserData from "./UserData";
import Accordion from 'react-bootstrap/Accordion'


// const  name = 'marina'; xxxxxxxxxxxxxxx

class AppClassComponent extends React.Component {
  constructor() {
    console.log("CONSTRUCTOR");
    super();
    this.state = {
      name: "Marina",
      position: "Frontend Developer",
    };
  }

  componentDidMount() {
    // CALLING API [HTTP REQUESTS - AJAX]
    console.log("DID MOUNT");
  }

  componentDidUpdate() {
    // BASED ON CHANGES DO SOMETHING
    console.log("DID UPDATED");
  }

  componentWillUnmount() {
    // COMPONENT WILL BE DESTROYED
    console.log("DESTROY");
  }

  changeUsername = (name) => {
    console.log("CLICK USER NAME");
    // this.state.name = 'Ahmed' xxxxxx WRONG xxxxxxxxx

    this.setState({
      name : name,
    });
  };

  render() {
    console.log("RENDER");
    console.log(this.props)
    return (
      <>
        <h1>Hello from Class Component</h1>
        <UserData userName={this.state.name} userPosition={this.state.position} />
        <button type="button" className="btn btn-success" onClick={() => this.changeUsername("Omar")}>
          Change Username
        </button>
        <button type="button" className="btn btn-warning" onClick={() => this.changeUsername("Youssef")}>
          Change Username
        </button>
       
      </>
    );
  }
}

export default AppClassComponent;
