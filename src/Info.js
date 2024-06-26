import React from "react";

// Class based component
class Info extends React.Component {
  constructor(props) {
    // Supeer calls constructor
    super(props);
    console.log(props);
    this.state = {
      count: 0
    }
  }
    buttonPressed() {
      this.setState({
        count: this.state.count + 1
      });
    }


  render() {

    return(
    <div>
    <p>Count: {this.state.count}</p>
    <button onClick={() => this.buttonPressed()}>Click Me</button>
    </div>
    );
   
  }
}

Info.defaultProps = {
  title: "Default Title"
}

export default Info;
