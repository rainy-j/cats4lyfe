import React from "react";
import { useState } from "react";

import GlobalStyles from "./GlobalStyles";
import { MainContainer, NavBar, OverLay } from "./AppStyles";

import Cart from "./BasketIndex";

export default function App({basketTotal, finalTotal}) {
  const [isToggle, setToggle] = useState(false);

  return (
    <>
      <GlobalStyles />
      <NavBar>
        <Cart basketTotal={basketTotal} finalTotal={finalTotal} isToggle={isToggle} setToggle={setToggle} />
      </NavBar>
      <MainContainer>{isToggle && <OverLay />}</MainContainer>
    </>
  );
}
