import "./App.css";
import Info from "./Info.js";
import {PropTypes} from "prop-types";

function App() {
  return (
    <div className="App">
      <Info title="Test"></Info>
      <AddItem text="Khori" number={2}></AddItem>
      <AddItem text="Jummy"></AddItem>
    </div>
  );
}

// Making AddItem component
function AddItem(props) {
  // Props are essentially parameters that can be used for functions
  // You can destructure props by putting them directly in the function parentheses
  const value = props.text;
  return (
    <form>
      <label for="text-form">Type something: </label>
      <input type="text" value={value} id="text-form" />
    </form>
  );
}

AddItem.defaultProps = {
  number: 7,
  text: "default",
};

// Prop types are used to enforce the the correct typing for props
AddItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string
}



export default App;
