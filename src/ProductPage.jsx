import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function ProductPage() {
   const {id}= useParams()
   const [product,SetProudcts]=useState({})

    const GetData=async()=>{
        const res=await fetch(`https://fakestoreapi.com/products/${id}`)
        const data=await res.json()
        SetProudcts(data)
    }

    useEffect(()=>{
        GetData()
    },[])
  return (
    <div>
        

        <h1>{product.title}</h1>
        <img src={product.image} alt="" />
      <h2>₹{product.price}</h2>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>⭐ {product.rate} ({product.count} reviews)</p>
    </div>
  )
}

export default ProductPage