import "./App.css";
import SearchBar from "./SearchBar";
import {useState} from "react";

function App() {
const [data, setData] = useState({});

const updateData = (searchParams) => {
  setData(searchParams);
}

  return (
    <div className="App">
      <SearchBar callback={updateData}></SearchBar>
      <p>{"name" in data ? data["name"] : "No Data to display"}</p>
      <p>{"price" in data ? data["price"] : "No Data to display"}</p>
      <p>{"type" in data ? data["type"] : "No Data to display"}</p>
      <p>{"brand" in data ? data["brand"] : "No Data to display"}</p>
    </div>
  );
}



export default App;
