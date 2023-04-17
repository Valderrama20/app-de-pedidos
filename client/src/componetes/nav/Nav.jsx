import style from './Nav.module.css'
import {Link} from 'react-router-dom'
export default function () {
    return(
    <div className={style.nav}>
        <h1>Candy Cotton</h1>
        <div className={style.bottons}>
             <div className={style.button}>
        <i className="bi bi-house-door"></i>
         <label htmlFor="">Casa</label>
        </div>
        <Link to="/">
        <div className={style.button}>
        <i className="bi bi-card-checklist"></i>
         <label htmlFor="">Pedidos</label>
        </div>
        </Link>

        <Link to="/pedidos" >
        <div className={style.button}>
        <i className="bi bi-bag-check"></i>
         <label htmlFor="">Crear Pedido</label>
        </div>
        </Link>
        </div>
       

    </div>
    )
}