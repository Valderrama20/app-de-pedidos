import { useState } from 'react'
import style from './Orders.module.css'

const [data,setData] = useState[{}]

const changeData = () => { 

}


export default function () {
    return (<div className={style.form}>
        <div className={style.top}>
            <div className={style.left}>
             <div> 
                <label htmlFor="">Img..</label>
            </div>
            <div>
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
            </div>
            <div>
            <input type="radio" name="envio" />
            <input type="radio" name="envio" />
            </div>
            </div>
            <div className={style.right}>
                 <div> 
                <label htmlFor="">Cliente</label>
                 <input type="text" />
            </div>
             <div> 
                <label htmlFor="">Fecha de entrega</label>
                 <input type="text" />
            </div>
            <div> 
                <label htmlFor="">Total</label>
                 <input type="text" />
            </div>
            <div> 
                <label htmlFor="">Abono</label>
                 <input type="text" />
            </div>
            </div>
        </div>
        <div> 
                <label htmlFor="">Detalles</label>
                 <textarea name="" id="" cols="15" rows="5s"></textarea>
            </div>
        
    </div>)
}