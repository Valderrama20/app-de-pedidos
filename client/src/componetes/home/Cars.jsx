import style from './general.module.css'

export default function ({order}) {

   
    return(
    <div className={style.car}>
    <img src="https://i0.wp.com/golmarymar.com.ar/wp-content/uploads/Publi_Gongys_Candy.jpg?fit=600%2C600&ssl=1" alt="" />
    <div className={style.datos}>
        <label >Cliente: {order.cliente}</label>
        <label >Fecha: {order.fecha}</label>
    </div>
    <div>
      <label >Algodones: {order.algodon && "si"}</label>
      <label >Cotufas: {order.pochoclos && "si"}</label>
      <label >Paletas: {order.paletas && "si"}</label>
    </div>
    </div>
    )
}