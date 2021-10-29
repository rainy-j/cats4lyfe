


const Cat = ({item, basketTotal, setBasketTotal, finalTotal, setFinalTotal}) => { 

    const calculateTotal = () => {
        let total = 0;
        for (let i=0; i<=basketTotal.length-1; i++) {
            total = basketTotal[i].price + total   
        }
        setFinalTotal(total)
    }
 
    const addToBasketHandler = () => {
        const newArray = [...basketTotal, {item: item.name, price:Number(item.price), age:item.age, url:item.url}]
        setBasketTotal(newArray)
        calculateTotal()
        console.log(basketTotal)
    }
    
    return(
    <div className="row">
        <div cat={item} className="card">          
            <img src={item.url} alt="cat" width="200px" height="200px" className="images"></img>
                <div>  
                    <div className="text">Name: {item.name} </div>
                    <div className="text">Age: {item.age}</div>
                    <div className="price">£{item.price}</div>
                    <button onClick={addToBasketHandler}>Add to basket</button>
                </div>
            </div>          
    </div> 
    ) 
};


export default Cat;