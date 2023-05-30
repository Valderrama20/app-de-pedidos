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

   const getOrders = async () => {
    const data = await axios.get(`${URL}/orders`)
    const data2 = data.data.map(e => {
      
        const fecha = new Date(e.fecha).toLocaleDateString()
        const modifique = fecha.split("/")
        modifique[1] = modifique[1] < 10 ? `0${modifique[1]}`: modifique[1]
        modifique[0] = modifique[0] < 10 ? `0${modifique[0]}`: modifique[0]

        return {
          ...e,
          fecha: modifique.join("/")
        }
      
       }
         )
         const reversed = data2.reverse()   

    setOrders(reversed)
   }

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