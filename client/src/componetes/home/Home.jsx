import { useEffect, useState } from "react"
import Nav from "../nav/Nav"
import Cars from "./Cars"
import style from "./general.module.css"
import axios from "axios"




const URL = import.meta.env.VITE_URL_FETCH 

export default function() {
  
  const [orders , setOrders] = useState([])


   useEffect(() => {
      getOrders()
   },[])

   const getOrders = async () => {
    const data = await axios.get(`${URL}/orders`)
    console.log(data.data)
    setOrders(data.data)
   }
     

   console.log(orders)

    return(<div>
         <Nav/>
        <div className={style.home}>

              <h2>Pedidos</h2>
            <div>
              {orders.map(e => <Cars key={e._id} order={e}/>)}  
            </div>
            
            
        </div>
       
        </div>)
}