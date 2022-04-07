import Product from "../Product"
import "./style.css"


export default function ProducsList(props) {

  return (<div className="produtos">
    <ul>

      {props.filteredProducts &&
        props.filteredProducts.map( (each) => {
          return <Product each={each} key={each.id} toCart={props.toCart} />
        })}

    </ul>
  </div>)

}