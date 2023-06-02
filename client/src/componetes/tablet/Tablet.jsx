import style from './Tablet.module.css'

export default function Tablet ({pedidos,change}) {
    
  const data2 = pedidos.map(e => {

      
   let fechaEspecifica = new Date(e.fecha);

   let year = fechaEspecifica.getFullYear();
   let month = ("0" + (fechaEspecifica.getMonth() + 1)).slice(-2);
   let day = ("0" + fechaEspecifica.getDate()).slice(-2);

   let fechaFormateada = year + "-" + month + "-" + day;

    return {
      ...e,
      fecha: fechaFormateada
    }
  
   }
     )

    return <div className={style.table}>
        <table >
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Fecha</th>
      <th>Incluye</th>
      <th>Envio</th>
      <th>Total</th>
      <th>Abono</th>
      <th>Resta</th>
      <th>Detalles</th>
      <th>Entregado</th>
    </tr>
  </thead>
  <tbody>

    {data2?.map(e => 
        <tr className={ e?.entregado ? style.delivered : null}>
        <td>{e.cliente}</td>
        <td>{e.fecha}</td>
        <td>{e.algodon && "Al "}{e.pochoclos && "Po "}{e.paletas && "Pa"}</td>
        <td>{e.envio == "true" ? "si" : "no"}</td>
        <td>${e.total}</td>
        <td>${e.abono}</td>
        <td>${e.total - e.abono}</td>
        <td onClick={() => change(e)}>Link</td>
        <td>{e?.entregado?"✅":"❌"}</td>
      </tr>)
      }
    
  </tbody>
</table>
    </div>
}