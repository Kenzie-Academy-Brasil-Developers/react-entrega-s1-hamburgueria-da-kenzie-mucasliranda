import "./style.css"
import { useState, useEffect } from "react"


export default function Header({toFilter,filterValue,setFilterValue}) {

  useEffect( () => {
    toFilter(filterValue)
  },[filterValue])

  return (<header>

    <img src="./../Mask Group.png" alt="Logo" />

    <input type={"text"} placeholder="Digitar Pesquisa" value={filterValue} onChange={ (event) => setFilterValue(event.target.value)} />

  </header>)

  //   

}