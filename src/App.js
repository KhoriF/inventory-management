import "./App.css";
import Info from "./Info.js";
import {PropTypes} from "prop-types";
import {useState} from "react";

function App() {
  return (
    <div className="App">
      <Info title="Test"></Info>
      <ButtonState></ButtonState>
    </div>
  );
}

// Component will be re-rendered from state
function ButtonState() {

  // Initialize state variables and functions to update the states
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  const updateTitleClicked = () => {
    setTitle("New");
  }

  const updateCounterClicked = () => {
      setCount(count + 1);
  }

  const resetCounter = () => {
    setCount(0);
  }

  return (
    <div>
    {/* State used as a prop*/}
    <Data title={title} count={count}></Data>
    <button onClick={updateTitleClicked}>Update Title</button>
    <button onClick={updateCounterClicked}>Update Counter</button>
    <button onClick={resetCounter}>Reset Counter</button>
    </div>
  )
}

function Data(props) {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Count: {props.count}</p>
    </div>
  );
}


// AddItem.defaultProps = {
//   number: 7,
//   text: "default",
// };

// // Prop types are used to enforce the the correct typing for props
// AddItem.propTypes = {
//   number: PropTypes.number,
//   text: PropTypes.string
// }



export default App;
