
import { useState } from "react"
import { useEffect } from "react"


function PostalPage() {
   const [product,SetProudcts]=useState({})

    const GetData=async()=>{
        const res=await fetch(`https://api.postalpincode.in/pincode/670593`)
        const data=await res.json()
        SetProudcts(data)
    }

    useEffect(()=>{
        GetData()
    },[])
  return (
    <div>
        

        <h1>{product.Name}</h1>
      {/* <h2>{product.BranchType}</h2>
      <p>{product.description}</p> */}
      
    </div>
  )
}

export default PostalPage
