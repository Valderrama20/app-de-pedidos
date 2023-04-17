import { useEffect, useState } from "react"
import Nav from "../nav/Nav"
import style from "./general.module.css"
import axios from "axios"
import Tablet from "../tablet/Tablet"




const URL = import.meta.env.VITE_URL_FETCH 

export default function() {
  
  const [orders , setOrders] = useState([])


   useEffect(() => {
      getOrders()
   },[])

   const getOrders = async () => {
    const data = await axios.get(`${URL}/orders`)
    const data2 = data.data.map(e => {
        return {
          ...e,
          fecha: new Date(e.fecha).toLocaleDateString()
        }
      
       }
         )
         console.log(data2)

    setOrders(data2)
   }
     


    return(<div>
         <Nav/>
        <div className={style.home}>

              <h2>Pedidos</h2>
            <div>
              <Tablet pedidos={orders}/>
            </div>
            
            
        </div>
       
        </div>)
}