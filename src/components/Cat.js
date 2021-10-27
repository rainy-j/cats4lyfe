


const Cat = ({item,index}) => { 
    return(
    <div>
        <div cat={item} />          
            <img src={item.url} alt="cat" width="200px" height="200px"></img>
            <div>  
                <div>Name: {item.name} </div>
                <div>Age:{item.age}</div>
                <div>Price:£{item.price}</div>
                
            </div>
            <div>
                <div item={item}/>   
                <p> </p>
                <div >Add To Basket</div> 
            </div>          
    </div> 
    ) 
};


export default Cat;