import "./App.css";
import React, { useState, useEffect } from "react";
import faker from "faker";
import Navbar from "./components/Navbar";

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    getCats();
  }, []);

  const getCats = async () => {
    let response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=12"
    );
    let data = await response.json();
    for (let i = 0; i < data.length; i++) {
      const cat = data[i];
      cat["name"] = faker.name.firstName();
      cat["age"] = faker.datatype.number(20);
      cat["price"] = faker.commerce.price(50, 500);
    }
    setCats(data);
  };

  return (
    <div className="App">
      <Navbar cats={cats} />
    </div>
  );
}

export default App;
