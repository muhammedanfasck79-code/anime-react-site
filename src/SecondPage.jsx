import { Card } from "react-bootstrap"
import NavbarNew from "./NavbarNew"
import Cards from "./Cards"

import products from "./product"
import randomimage from "../public/hello.png"
import { useState } from "react"



function SecondPage(props){

const [showimage,SetImage]=useState(true)
const [mode,SetMode]=useState("green")
    return <div style={{backgroundColor:mode}}>

  
  <NavbarNew/>
    <button onClick={()=>SetMode("black")}>dark mode </button>
      <button onClick={()=>SetMode("white")}>light mode </button>


        <h1>second page</h1>
    <div className="container">
        <div className="row">
        {
            products.map(item=><Cards name={item.name} price={item.price} image={item.image}/>)
        }
        </div>

    </div>

    <h1>image below</h1>
            
   {
    showimage? <img src={randomimage} height={200}/>:<></>
   }
   <button onClick={()=>SetImage(false)}>hide</button>
    </div>
    
}

export default SecondPage