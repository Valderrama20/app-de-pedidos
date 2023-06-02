import { useEffect, useState } from "react"
import Nav from "../nav/Nav"
import style from "./general.module.css"
import axios from "axios"
import Tablet from "../tablet/Tablet"
import Modal from "../modal/Modal"


const URL = import.meta.env.VITE_URL_FETCH 

export default function() {
  
  const [orders , setOrders] = useState([])
  const [details , setDetails] = useState(false)
  const [order , setOrder] = useState({})


   useEffect(() => {
      getOrders()
   },[])

   function compararFechas(a, b) {
     return b.fecha - a.fecha;
   }
   

   const getOrders = async () => {
    const data = await axios.get(`${URL}/orders`)
    
     const order = data.data.sort(compararFechas)
         order.reverse()
    setOrders(order)
   }

    console.log(orders)

   const changeDetails = (e) => {
    setDetails(!details)
    setOrder(e)
   }
     


    return(<div>
         <Nav/>
         <div className={style.home}>
              <h2>Pedidos</h2>
              <Tablet pedidos={orders} change={changeDetails}/>
              {details && <Modal change={changeDetails} pedido={order}/>}
        </div>
        </div>)
}