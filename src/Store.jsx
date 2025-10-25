import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
function Store() {

    const [product,SetProudcts]=useState([])

    const GetData=async()=>{
      let res=await fetch("https://fakestoreapi.com/products")
      let data=await res.json()

      SetProudcts(data)

    }


    useEffect(()=>{
        GetData()
    },[])

  return (
  <>
  
    <div>Store</div>

    <div>
        {
            product.map(item=><StoreCard title={item.title} image={item.image} id={item.id} price={item.price}description={item.description}category={item.category}rating={
            item.rating}rate={item.rate}count={item.count}/>)
        }
    </div>

   </>
  )
}

export default Store



function StoreCard(props){


    return <>
    
    <h1>{props.title}</h1>
    <img src={props.image} height={200} />
    <h2>₹{props.price}</h2>
    <h1>{props.description}</h1>
    <h1>{props.category}</h1>
    
    
    <Link to={`/product/${props.id}`}>view more</Link>
    </>
}