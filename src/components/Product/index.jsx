import "./style.css"


export default function Product(props) {

  return (<section>
    
    <div className="imgBackground" >
      <img src={props.each.img} alt={props.each.name} />
    </div>

    <div className="dados" >

      <h3>{props.each.name}</h3>

      <span>{props.each.category}</span>

      <p>R$ {props.each.price.toFixed(2).replace(".", ",")}</p>

      <button onClick={ () => props.toCart(props.each.id)} key={props.each.id} >Adicionar</button>

    </div>

  </section>)

}