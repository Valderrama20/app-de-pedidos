import style from './Tablet.module.css'

export default function Tablet ({pedidos}) {


    console.log(pedidos)
    return <div>
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
    </tr>
  </thead>
  <tbody>

    {pedidos?.map(e => 
        <tr>
        <td>{e.cliente}</td>
        <td>{e.fecha}</td>
        <td>{e.algodon && "Al "}{e.pochoclos && "Po "}{e.paletas && "Pa"}</td>
        <td>{e.envio == "true" ? "si" : "no"}</td>
        <td>${e.total}</td>
        <td>${e.abono}</td>
        <td>${e.total - e.abono}</td>
        <td>Link</td>
      </tr>)
      }
    
  </tbody>
</table>
    </div>
}