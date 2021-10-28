


const Cat = ({item}) => { 
    
    return(
    <div className="row">
        <div cat={item} className="line"/>          
            <img src={item.url} alt="cat" width="200px" height="200px" className="images"></img>
            <div>  
                <div className="text">Name: {item.name} </div>
                <div className="text">Age: {item.age}</div>
                <div className="text">Price: £{item.price}</div>
                <button>Add</button>
            </div>          
    </div> 
    ) 
};


export default Cat;