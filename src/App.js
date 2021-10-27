import React, {useState, useEffect} from 'react'
import faker from "faker";
import './App.css';
import Cat from "./components/Cat.js";

function App() {

  const [cats, setCats] = useState ([]); 


  useEffect(() => {
    getCats();
  }, []);

const getCats = async () => {
    
      let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      let data = await response.json(); 
      for (let i = 0; i < data.length ; i++) {
        const cat = data[i];
        cat["name"] = faker.name.firstName()        
        cat["age"] = faker.datatype.number(20)
        cat["price"] = faker.commerce.price(50,500)
        // console.log(data)
        console.log(cat)
      }
      setCats(data)
  }

  return (
    <div className="App">
<div>
{cats.map((item, index) => {
            return  (
                <Cat item={item} index={index} key={index} />                                 
                )
            })
    }
</div>
    </div>
    
  );
}

export default App;
