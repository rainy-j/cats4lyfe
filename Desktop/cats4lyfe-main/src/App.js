import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cats from "./Components/Cats";
import Home from "./Components/Home";
import CartImage from "./Images/icon-cart.svg"

function App() {
  return (
    <Router>
      <div className="nav-container">
        <div className="logo-container">
          <h2>
            CatsFor<span id="logo-span">Life</span>
          </h2>
        </div>
        
        <div className="nav-bar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/cats">Cats</Link>
            </li>
          </ul>
        </div>
        <div className="basket-container">
            <img src={CartImage} alt="shopping-cart"/>
        </div>
      </div>
        <Switch>
          <Route path="/cats">
            <Cats />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    
    </Router>
  );
}

export default App;
