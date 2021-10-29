import React, { useRef } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import useOnClickOutside from "./Hooks/useOnClickOutside";

import {
  Wrapper,
  Icon,
  CartCount,
  CartSideBar,
  EmptyCart,
  SideBarHeader,
} from "./BasketStyles";
import BasketItems from "./BasketItems";

export default function Cart({ isToggle, setToggle, basketTotal, finalTotal }) {
  const $sidebarRef = useRef();

  // Detect click outside of the cart section to retract the sidebar
  useOnClickOutside($sidebarRef, () => setToggle(false));

  return (
    <>
      <Wrapper onClick={() => setToggle(true)}>
        <Icon icon={faShoppingCart} />
        <CartCount value={basketTotal.length}>{basketTotal.length}</CartCount>
      </Wrapper>

      <CartSideBar ref={$sidebarRef} className={isToggle ? "expand" : "shrink"}>
        <SideBarHeader>Basket</SideBarHeader>
        {(basketTotal.length === 0) ? <EmptyCart>Empty basket</EmptyCart> : <BasketItems basketTotal={basketTotal} finalTotal={finalTotal}/>}
      </CartSideBar>
    </>
  );
}
