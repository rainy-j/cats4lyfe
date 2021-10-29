import React from "react";
import { useState } from "react";

import GlobalStyles from "./GlobalStyles";
import { MainContainer, NavBar, OverLay } from "./AppStyles";

import Cart from "./BasketIndex";

export default function App({basketTotal, finalTotal, setFinalTotal}) {
  const [isToggle, setToggle] = useState(false);

  return (
    <>
      <GlobalStyles />
      <NavBar>
        <Cart setFinalTotal={setFinalTotal} basketTotal={basketTotal} finalTotal={finalTotal} isToggle={isToggle} setToggle={setToggle} />
      </NavBar>
      <MainContainer>{isToggle && <OverLay />}</MainContainer>
    </>
  );
}
