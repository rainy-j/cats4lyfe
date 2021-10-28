


const Cat = ({item}) => { 
    
    return(
    <div className="row">
        <div cat={item} className="card">          
            <img src={item.url} alt="cat" width="200px" height="200px" className="images"></img>
            <div >  
                <div className="text">Name: {item.name} </div>
                <div className="text">Age: {item.age}</div>
                <div className="price">£{item.price}</div>
                <button>Add to basket</button>
                </div>
            </div>          
    </div> 
    ) 
};


export default Cat;