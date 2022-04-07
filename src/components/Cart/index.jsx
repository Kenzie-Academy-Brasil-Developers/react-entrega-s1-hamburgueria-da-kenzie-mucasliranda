import CartTotal from "../CartTotal"
import CartProduct from "../CartProduct"
import "./style.css"


export default function Cart(props) {

  return (<aside>

    <div className="asideHeader" >
      <h3>Carrinho de compras</h3>
    </div>

    <div className="asideBody" >
      <ul>
        {props.currentSale.length >= 1 ? (
          props.currentSale && 
            props.currentSale.map( (each, index) => {
              return <CartProduct each={each} index={index} key={index} removeOne={props.removeOne}/>
            })
        ):(
          <li className="vazio" >

            <h3>Sua sacola está vazia</h3>

            <p>Adicione itens</p>

          </li>
        )}

      </ul>
        
      <hr />

    </div>

    <CartTotal cartTotal={props.cartTotal} removeAll={props.removeAll} />

  </aside>)

}