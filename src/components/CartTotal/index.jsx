import "./style.css"


export default function CartTotal({cartTotal,removeAll}) {

  return (<div className="cartTotal" >

    <div className="cartTotal--dados" >

      <h4>Total</h4>

      <span>R$ {cartTotal}</span>

    </div>

    <button onClick={ () => removeAll()} >Remover todos</button>

  </div>)

}