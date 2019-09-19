import React from 'react'

export default function ItemList(props){
  return(
    <div>
    <h1>Veilingitems</h1>
    <ul>
      { props.items.map(item =>
        <li key={item.id}>
          { item.name }
        </li>
        )}
    </ul>
    </div>
  )
}