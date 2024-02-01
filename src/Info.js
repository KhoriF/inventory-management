import React from "react";

// Class based component
class Info extends React.Component {
  constructor(props) {
    // Supeer calls constructor
    super(props);
    console.log(props);
  }

  render() {
    const title = this.props.title;
    const showTitle = true;

    if (showTitle) {
      return (
        // Div contains the component
        <div>
          <h1>{title}</h1>
          <p>Manage your stuff.</p>
        </div>
      );
    } else {
      return <h1>Empty</h1>;
    }
  }
}

Info.defaultProps = {
  title: "Default Title"
}

export default Info;
