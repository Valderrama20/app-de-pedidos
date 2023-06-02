import { Link, redirect } from 'react-router-dom'
import style from './Modal.module.css'
import axios from 'axios'
import Swal from 'sweetalert2'


const URL = import.meta.env.VITE_URL_FETCH 




export default function Modal ({change, pedido}) {

   const deleteOrder =  async () => {

    Swal.fire({
        title: `Quieres eliminar el pedido de: ${pedido.cliente}`,
        showDenyButton: true,
        confirmButtonText: 'Eliminar',
        denyButtonText: `No Eliminar`,
      }).then( async (result) => {
        if (result.isConfirmed) {
         await axios.delete(`${URL}/deleteOrder/${pedido._id}`)
          Swal.fire('Eliminado', '', 'success').then(() => change()  )
        }
      })
   }

   let orderDelivered = async () => {
     await axios.put(`${URL}/orderDelivered/${pedido._id}`,{entregado:true})
   }
     
    const jose = () => {

    const {__v, _id, ...datos} = pedido
      window.localStorage.setItem("modificarPedido", JSON.stringify(datos))
    }
   
    return <div className={style.father}>
        <div className={style.modal}></div>
        <div className={style.modal2}>
            <button onClick={change} className={style.exit}>X</button>
            <div className={style.panels}>
                <div className={style.left}>
                    <img src="https://th.bing.com/th/id/R.7f398e2f43e39340eac9ece11b64526a?rik=AdRXWUziYBppUA&pid=ImgRaw&r=0" alt="" />
                    <div>
                        <p>
                            <span className={pedido.algodon ?style.true:style.false}>Algodones</span>
                            <span className={pedido.paletas ?style.true:style.false}>Pochoclos</span>
                            <span className={pedido.pochoclos ?style.true:style.false}>Paletas</span>
                        </p>
                        
                    </div>
                    <div id={style.envio}>
                       {pedido.envio === "true" 
                       ?<p>Necesita Envio</p>
                        : <p>No Necesita Envio</p>
                        
                       } 
                    </div>

                </div>
                <div className={style.right}>
                    <label >Cliente:</label>
                    <p>{pedido.cliente}</p>
                    <label >Fecha de entrega:</label>
                    <p>{pedido.fecha}</p>
                    <label >Total:</label>
                    <p>{pedido.total}</p>
                    <label >Abono:</label>
                    <p>{pedido.abono}</p>
                    <label >Resta:</label>
                    <p>{pedido.total - pedido.abono}</p>
                </div>
            </div>
            <label >Detalles:</label>
            <div className={style.detalles}>
                 
                <p>{pedido.detalles}</p>
            </div>

            <div className={style.btn}>
               <Link to={`/editarPedido/${pedido._id}`}><button onClick={jose}>Modificar</button></Link> 
                <button onClick={deleteOrder}>Eliminar</button>
                {!pedido?.entregado && <button onClick={orderDelivered}>Entregar</button>}
            </div>
            
        </div>
    </div>
}