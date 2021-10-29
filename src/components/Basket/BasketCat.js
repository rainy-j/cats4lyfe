


const Cat = ({item}) => { 
    
    return(
        <div cat={item} className="card">          
            <img src={item.url} alt="cat" width="200px" height="200px" className="images"></img>
                <div>  
                    <div className="text">{item.name} </div>
                    <div className="price">£{item.price}</div>
                </div>
            </div>          
    ) 
};


export default Cat;