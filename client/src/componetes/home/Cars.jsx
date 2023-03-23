import style from './general.module.css'

export default function () {
    return(
    <div className={style.car}>
    <img src="https://i0.wp.com/golmarymar.com.ar/wp-content/uploads/Publi_Gongys_Candy.jpg?fit=600%2C600&ssl=1" alt="" />
    <div className={style.datos}>
        <label htmlFor="">Cliente</label>
        <label htmlFor="">Fecha</label>
    </div>
    <div>
      <label >Algodones: {}</label>
      <label >Cotufas: {}</label>
      <label >Paletas: {}</label>
    </div>
    </div>
    )
}