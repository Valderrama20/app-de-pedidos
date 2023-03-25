import style from './Nav.module.css'
import {Link} from 'react-router-dom'
export default function () {
    return(
    <div className={style.nav}>
        <p>Candy Cotton</p>
        <div className={style.bottons}>
             <div className={style.button}>
        <i className="bi bi-house-door"></i>
         <label htmlFor="">Casa</label>
        </div>
        <div className={style.button}>
        <i class="bi bi-card-checklist"></i>
         <label htmlFor="">Pedidos</label>
        </div>
        <Link to="/pedidos">
        <div className={style.button}>
        <i class="bi bi-bag-check"></i>
         <label htmlFor="">Crear Pedido</label>
        </div>
        </Link>
        <div className={style.button}>
        <i class="bi bi-person-vcard"></i>
         <label htmlFor="">Clientes</label>
        </div>
        </div>
       

    </div>
    )
}