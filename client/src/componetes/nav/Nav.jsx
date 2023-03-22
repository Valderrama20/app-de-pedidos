import style from './Nav.module.css'

export default function () {
    return(
    <div className={style.nav}>
        <div className={style.bottons}>
             <div className={style.button}>
        <i className="bi bi-house-door"></i>
         <label htmlFor="">Casa</label>
        </div>
        <div className={style.button}>
        <i class="bi bi-card-checklist"></i>
         <label htmlFor="">Pedidos</label>
        </div>
        <div className={style.button}>
        <i class="bi bi-bag-check"></i>
         <label htmlFor="">Crear Pedido</label>
        </div>
        <div className={style.button}>
        <i class="bi bi-person-vcard"></i>
         <label htmlFor="">Clientes</label>
        </div>
        </div>
       

    </div>
    )
}