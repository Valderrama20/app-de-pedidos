import { useEffect, useState } from "react"
import Nav from "../nav/Nav"
import Cars from "./Cars"
import style from "./general.module.css"
import axios from "axios"

const URL_FETCH = "https://app-de-pedidos-e2rnd1g8w-valderrama20.vercel.app"

export default function() {
  
  const [orders , setOrders] = useState([])


   useEffect(() => {
      getOrders()
   },[])

   const getOrders = async () => {
    const data = await axios.get(`${URL_FETCH}/orders`)
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