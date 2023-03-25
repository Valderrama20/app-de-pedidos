import Nav from "../nav/Nav"
import Cars from "./Cars"
import style from "./general.module.css"


export default function() {
    return(<div>
         <Nav/>
        <div className={style.home}>

              <h2>Pedidos</h2>
            <div>
              {[1,2,3,4,5,6,7,8].map(e => <Cars key={e}/>)}  
            </div>
            
            
        </div>
       
        </div>)
}