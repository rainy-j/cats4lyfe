import Cat from "./Cat";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import BasketApp from "./Basket/BasketApp";

const Navbar = ({ cats, basketTotal, setBasketTotal, finalTotal, setFinalTotal }) => {
  return (
    <Router>
      <div className="nav-container">
        <div className="logo-container">
          <Link id="logo-link" to="./home">
            <h2 className="logo">
              CatsFor<span id="logo-span">Life</span>
            </h2>
          </Link>
        </div>
        <div className="nav-bar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="/cats">
                Cats
              </Link>
            </li>
          </ul>
        </div>
        <div className="basket-container">
          <BasketApp setFinalTotal={setFinalTotal} basketTotal={basketTotal} finalTotal={finalTotal} />
        </div>
      </div>
      <Switch>
        <Route path="/cats">
          {cats.map((item, index) => {
            return (
              <Cat
                basketTotal={basketTotal}
                setBasketTotal={setBasketTotal}
                finalTotal={finalTotal}
                setFinalTotal={setFinalTotal}
                item={item}
                index={index}
                key={index}
              />
            );
          })}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
