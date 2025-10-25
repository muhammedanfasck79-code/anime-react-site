
import "./App.css"
import NavbarNew from "./NavbarNew"
import SlideImage from "./SlideImage"
import Card from "./Cards"
// import Navbar from "./Navbar"
// import Button from "./Button"
import products from "./product"
import { useState } from "react"
import SearchComponent from "./SearchComponent"


function App() {
  const [mode,SetMode] = useState("yellow")
  return <div style={{ backgroundColor: mode }}>


    <button onClick={() => SetMode("black")}>dark mode </button>
    <button onClick={() => SetMode("white")}>light mode </button>
    <NavbarNew />
    <h1>Best Deals of the month</h1>
<SearchComponent/>
<SlideImage/>

  
  
  
    
    



    <div className="container mt-5">
      <div className="row">
        {
          products.map(item => <Card name={item.name} price={item.price} image={item.image} />)
        }
      </div>


    </div>
  </div>

}
export default App