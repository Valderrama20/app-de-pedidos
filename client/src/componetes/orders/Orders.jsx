import { useEffect, useState } from 'react'
import style from './Orders.module.css'
import Swal from 'sweetalert2'
import { PEDIDO } from '../../utils/variables'
import axios from 'axios'



const URL = import.meta.env.VITE_URL_FETCH 


export default function Orders () { 
   
    const url = window.location.pathname.split("/")

    const [data,setData] = useState(PEDIDO)
    
    useEffect(() => {
        if(url[1] == "editarPedido") {
            const modifyData = JSON.parse(window.localStorage.getItem("modificarPedido"))
             setData(modifyData)
            }
    },[])

    console.log(data.fecha.split("/").reverse().join("-"))


    const changeData = (e) => { 
       let value = e.target.type == "checkbox"? e.target.checked : e.target.value
       setData({...data,[e.target.name]:value})
    
    }

    const modifyOrder = async (e) => {
        e.preventDefault()
        const respuesta = await axios.put(`${URL}/editOrder/${url[2]}`,data)
        console.log(respuesta)
    }
 
    const create = async (e) => {
        const respuesta = await axios.post(`${URL}/newOrder`,data)
        console.log(respuesta)
       
        Swal.fire(
            {
                icon: 'success',
                title: 'Tu pedido fue creado exitosamente',
                showConfirmButton: true
            }
          )
         
    }

    

    return (<form className={style.form} onSubmit={url[1] === "pedidos"? create: modifyOrder}>
        <div className={style.top}>
            <div className={style.left}>
             <div> 
                <img src="" alt="Logo" />
            </div>
            <div className={style.checkbox}>
                A
                <input type="checkbox" name='algodon' checked={data.algodon} onClick={changeData}/>
                P
                <input type="checkbox" name='pochoclos' checked={data.pochoclos} onClick={changeData}/>
                PA
                <input type="checkbox" name='paletas' checked={data.paletas} onClick={changeData}/>
            </div>
            <div className={style.radio}>
                envio
            <input type="radio" name="envio" value={true} onClick={changeData}/>
                no envio
            <input type="radio" name="envio" value={false} onClick={changeData}/>
            </div>
            </div>
            <div className={style.right}>
                 <div className={style.input}> 
                <label htmlFor="">Cliente:</label>
                 <input type="text" name='cliente' onChange={changeData} value={data.cliente} required />
            </div>
             <div className={style.input}> 
                <label htmlFor="">Fecha de entrega:</label>
                 <input type="date" name='fecha' onChange={changeData}  value={data.fecha.split("/").reverse().join("-")} required />
            </div >
            <div className={style.input}> 
                <label htmlFor="">Total:</label>
                 <input type="number" name='total' onChange={changeData} value={data.total} required />
            </div>
            <div className={style.input}> 
                <label htmlFor="">Abono:</label>
                 <input type="number" name='abono' onChange={changeData} value={data.abono}/>
            </div>
            
            </div>
        </div>
        <div className={style.detalles}> 
                <label htmlFor="">Detalles:</label>
                 <textarea name="detalles" id="" cols="15" rows="5s" onChange={changeData} value={data.detalles} required></textarea>
            </div>
            <div className={style.btn}>
                <button>{url[1] === "pedidos"? "Crear Pedido": "Modificar Pedido"}</button>

                
            </div>
        
    </form>)
}