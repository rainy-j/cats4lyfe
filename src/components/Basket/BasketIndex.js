import React, { useRef } from "react";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";

import useOnClickOutside from "./Hooks/useOnClickOutside";

import {
  Wrapper,
  Icon,
  CartCount,
  CartSideBar,
  EmptyCart,
  SideBarHeader,
} from "./BasketStyles";

export default function Cart({ isToggle, setToggle }) {
  const $sidebarRef = useRef();

  // Detect click outside of the cart section to retract the sidebar
  useOnClickOutside($sidebarRef, () => setToggle(false));

  return (
    <>
      <Wrapper onClick={() => setToggle(true)}>
        <Icon icon={faShoppingCart} />
        <CartCount>0</CartCount>
      </Wrapper>

      <CartSideBar ref={$sidebarRef} className={isToggle ? "expand" : "shrink"}>
        <SideBarHeader>Basket</SideBarHeader>
        <EmptyCart>Empty Basket</EmptyCart>
      </CartSideBar>
    </>
  );
}
