import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import faker from "faker";
import "./App.css";
import Cat from "./components/Cat";
import Home from "./components/Home";
import CartImage from "./Images/icon-cart.svg";

function App() {

  const [cats, setCats] = useState([]);

  useEffect(() => {
    getCats();
  }, []);


const getCats = async () => {
 
      let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=12")
      let data = await response.json();
      for (let i = 0; i < data.length ; i++) {
        const cat = data[i];
        cat["name"] = faker.name.firstName()        
        cat["age"] = faker.datatype.number(20)
        cat["price"] = faker.commerce.price(50,500)
        
        // console.log(cat)
      }
      setCats(data)
     
  }


  return (
    <div className="App">
      <Router>
        <div className="nav-container">
          <div className="logo-container">
            <h2 id="logo">
              CatsFor<span id="logo-span">Life</span>
            </h2>
          </div>

          <div className="nav-bar">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/cats">Cats</NavLink>
              </li>
            </ul>
          </div>
          <div className="basket-container">
            <img src={CartImage} id="basket-icon" alt="cart-icon" />
          </div>
        </div>
        <Switch>
          <Route path="/cats">
          {cats.map((item, index) => {
  
           
          return <Cat item={item} index={index} key={index}  />;
        })}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <div>
      </div>
    </div>
  );
}

export default App;
