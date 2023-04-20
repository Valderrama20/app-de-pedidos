import style from './Modal.module.css'


export default function Modal ({change}) {
    console.log(change);
    return <div className={style.father}>
        <div className={style.modal}></div>
        <div className={style.modal2}>
            <button onClick={change} className={style.exit}>X</button>
            <div>
                <div className={style.left}>
                    <div>
                        <h3>Algodones</h3>
                        <h3>Pochoclos</h3>
                        <h3>Paletas</h3>
                    </div>
                    <div>
                        <p>Necesita Envio</p>
                        <p>No Necesita Envio</p>
                    </div>

                </div>
                <div className={style.right}></div>
            </div>
        </div>
    </div>
}