import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setData(users));
  }, []);

  return (
    <div className="App">
      <h1>Data</h1>

      <CardList info={data} />
    </div>
  );
};

export default App;
