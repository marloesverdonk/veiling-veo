import React from 'react'

export default function ItemList(props){
  console.log(props.items.filter(item => item.ronde === 3))
  return(
    <div>
    <h1>Veilingitems</h1>
 
      
    {/* <h3>Ronde 1 </h3>
 
    <h3>Ronde 2</h3>
   
    <h3>Ronde 3</h3> */}
    <ul>
      { props.items.map(item =>  
      <li key={item.id} onClick={() => props.selectItem(item.id)}>
        { item.name }
      </li>
      )}
    </ul>
    </div>
  )
}