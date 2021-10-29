import "./BasketStyles";
import { SideBarHeader } from "./BasketStyles";
import BasketCat from "./BasketCat";

const BasketItems = ({ basketTotal, finalTotal, setFinalTotal }) => {

    const checkoutHandler = () => {
        
            let total = 0;
            for (let i=0; i<basketTotal.length; i++) {
                console.log(basketTotal[i].price)
                total += basketTotal[i].price   
            }
            setFinalTotal(total) 
    }
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
          <SideBarHeader>Total: £{finalTotal}</SideBarHeader>
          <button onClick={() => checkoutHandler()} className="">Checkout</button>
    </div>
  );
};

export default BasketItems;
