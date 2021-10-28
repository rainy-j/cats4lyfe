import Cat from './Cat'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CartImage from "../Images/icon-cart.svg";
import Home from './Home'

const Navbar = ({cats}) => {
    return (
        <Router>
        <div className="nav-container">
          <div className="logo-container">
            <h2 className="logo">
              CatsFor<span id="logo-span">Life</span>
            </h2>
          </div>
          <div className="nav-bar">
            <ul className="nav-list">
              <li className="nav-item">
                <Link class="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link" to="/cats">Cats</Link>
              </li>
            </ul>
          </div>
          <div className="basket-container">
            <img id="basket-icon"src={CartImage} alt="cart-icon" />
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
    )
}

export default Navbar