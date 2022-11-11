import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [total, setTotal] = useState(0);

  const [list, setList] = useState([]);
  
  function clickHandler(price, name){
    let newList = [...list, name]
    setList(newList);
    setTotal(total + price);
  }

  return (
    <>
    <h1>Dom Dolla Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
    <div className="App">
      <div class = "flex-container">
        {bakeryData.map((item) => ( // TODO: map bakeryData to BakeryItem components
          <p>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <img src = {item.image} width={300} height={250}></img>
            <button onClick = {() => clickHandler(item.price, item.name)}> Add to Cart</button>
          </p> // replace with BakeryItem component
        ))}
      </div>
      <div class = "flex-containter2">
        <div>
          <h2>Cart</h2>
          {total == 0
          ?<p>You have nothing in your cart.</p>
          :<p> 
            <p>Total: {total}</p> 
            <p>{list.map((item)=> <ul>{item}</ul>)}</p> 
          </p>}
        </div>
      </div>
    </div>
  </>);
}

export default App;
