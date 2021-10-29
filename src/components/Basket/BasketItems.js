import "./BasketStyles";
import { SideBarHeader } from "./BasketStyles";
import BasketCat from "./BasketCat";

const BasketItems = ({ basketTotal, finalTotal }) => {

  return (
    <div className="basket">
      {basketTotal.map((item, index) => {
            return (
              <BasketCat
                item={item}
                index={index}
                key={index}
              />
            );
          })}
          <SideBarHeader>Totals: {finalTotal}</SideBarHeader>
          <button className="">Checkout</button>
    </div>
  );
};

export default BasketItems;
