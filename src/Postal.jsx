import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
Link 
function postal() {

    const [product,SetProudcts]=useState([ ])

    const [pincode,SetPincode]=useState(670001)

    const GetData=async()=>{
      let res=await fetch(`https://api.postalpincode.in/pincode/${pincode}`)
      let data=await res.json()

      SetProudcts(data[0]['PostOffice'])

    }


    useEffect(()=>{
        GetData()
    },[pincode])

  return (
  <>
   <div>
    <input type="text" placeholder="enter pincode" onChange={e=>SetPincode(e.target.value)} />

    
    <div>
        {
          product?.map(item=><StoreCard title={item.Name} pin={item.Pincode}/>)
        }
    </div>
</div>
   </>
  )
}

export default postal



function StoreCard({title,pin}){


    return <>
    
   <h1>{title}</h1>
   <p>{pin}</p>
   
    </>
}