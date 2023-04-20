import { useState } from 'react'
import style from './Orders.module.css'
import Swal from 'sweetalert2'
import { PEDIDO } from '../../utils/variables'
import axios from 'axios'



const URL = import.meta.env.VITE_URL_FETCH 


export default function () { 
   

    const [data,setData] = useState(PEDIDO)

    const changeData = (e) => { 
       let value = e.target.type == "checkbox"? e.target.checked : e.target.value
       setData({...data,[e.target.name]:value})
       console.log(data)
    
    }

    const create = async (e) => {
         e.preventDefault()
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

    

    return (<form className={style.form} onSubmit={create}>
        <div className={style.top}>
            <div className={style.left}>
             <div> 
                <img src="" alt="Logo" />
            </div>
            <div className={style.checkbox}>
                A
                <input type="checkbox" name='algodon' onClick={changeData}/>
                P
                <input type="checkbox" name='pochoclos' onClick={changeData}/>
                PA
                <input type="checkbox" name='paletas' onClick={changeData}/>
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
                 <input type="text" name='cliente' onChange={changeData} required />
            </div>
             <div className={style.input}> 
                <label htmlFor="">Fecha de entrega:</label>
                 <input type="date" name='fecha' onChange={changeData} required />
            </div >
            <div className={style.input}> 
                <label htmlFor="">Total:</label>
                 <input type="number" name='total' onChange={changeData} required />
            </div>
            <div className={style.input}> 
                <label htmlFor="">Abono:</label>
                 <input type="number" name='abono' onChange={changeData}/>
            </div>
            
            </div>
        </div>
        <div className={style.detalles}> 
                <label htmlFor="">Detalles:</label>
                 <textarea name="detalles" id="" cols="15" rows="5s" onChange={changeData} required></textarea>
            </div>
            <div className={style.btn}>
                <input type="submit" />

                
            </div>
        
    </form>)
}