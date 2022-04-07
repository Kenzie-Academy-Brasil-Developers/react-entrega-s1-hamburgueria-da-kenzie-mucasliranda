import "./style.css"


export default function CartProduct(each) {

  return (<li className="produto" >
    <img src={each.each.img} alt={each.each.name}/>

    <div className="dadosCarrinho" >
      <h4>{each.each.name}</h4>

      <p>{each.each.category}</p>

      <span onClick={ () => each.removeOne(each.each.id) } id={each.each.id} >Remover</span>
    </div>
  </li>)

}