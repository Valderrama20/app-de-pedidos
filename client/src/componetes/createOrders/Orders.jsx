import { useState } from 'react'
import style from './Orders.module.css'
import axios from 'axios'
import { useFetch } from '../../hooks/useFetch'


export default function () {

    const [data,setData] = useState(
        {
            algodon:false,
             pochoclos:false,
             paletas:false ,
              envio: "false",
               cliente: "",
                fecha: "",
                 total: "",
                  abono: "",
                  detalles: "",
                })

    const changeData = (e) => { 
       let value = e.target.type == "checkbox"? e.target.checked : e.target.value
       setData({...data,[e.target.name]:value})
    
    }

    const create = async () => {

        const respuesta = await axios.post('http://localhost:3001/newOrder',data)
        console.log(respuesta.data)
    }

    return (<div className={style.form}>
        <div className={style.top}>
            <div className={style.left}>
             <div> 
                <img src="" alt="Logo" />
            </div>
            <div>
                <input type="checkbox" name='algodon' onClick={changeData}/>
                <input type="checkbox" name='pochoclos' onClick={changeData}/>
                <input type="checkbox" name='paletas' onClick={changeData}/>
            </div>
            <div>
            <input type="radio" name="envio" value={true} onClick={changeData}/>
            <input type="radio" name="envio" value={false} onClick={changeData}/>
            </div>
            </div>
            <div className={style.right}>
                 <div> 
                <label htmlFor="">Cliente</label>
                 <input type="text" name='cliente' onChange={changeData}/>
            </div>
             <div> 
                <label htmlFor="">Fecha de entrega</label>
                 <input type="date" name='fecha' onChange={changeData} />
            </div>
            <div> 
                <label htmlFor="">Total</label>
                 <input type="text" name='total' onChange={changeData}/>
            </div>
            <div> 
                <label htmlFor="">Abono</label>
                 <input type="text" name='abono' onChange={changeData}/>
            </div>
            </div>
        </div>
        <div> 
                <label htmlFor="">Detalles</label>
                 <textarea name="detalles" id="" cols="15" rows="5s" onChange={changeData}></textarea>
            </div>
            <div>
                <button onClick={create}>Crear Pedido</button>
            </div>
        
    </div>)
}