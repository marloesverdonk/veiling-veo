import React from 'react'

export default function ItemDetails(props){
  const item = props.item
  return (
    <div>
      <br></br>
      <h2> { item.name }</h2>
      <p> <i>Aanbieder: { item.aanbieder }</i></p>
      <p> <i>Voor: { item.afnemer }</i></p>
      <p> <i>Minimum bod: €{ item.minBod },-</i></p>
      <img src={ item.image } alt="should show image" />
    </div>
  )
}