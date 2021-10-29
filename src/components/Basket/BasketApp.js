import React from "react";
import { useState } from "react";

import GlobalStyles from "./GlobalStyles";
import { MainContainer, NavBar, OverLay } from "./AppStyles";

import Cart from "./BasketIndex";

export default function App() {
  const [isToggle, setToggle] = useState(false);

  return (
    <>
      <GlobalStyles />
      <NavBar>
        <Cart isToggle={isToggle} setToggle={setToggle} />
      </NavBar>
      <MainContainer>{isToggle && <OverLay />}</MainContainer>
    </>
  );
}
