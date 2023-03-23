import Cars from "./Cars"
import style from "./general.module.css"


export default function() {
    return(
        <div className={style.home}>
            {[1,2,3,4,5,6,7,8].map(e => <Cars key={e}/>)}
        </div>
    )
}