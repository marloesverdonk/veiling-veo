import React from 'react'
import { connect } from 'react-redux'
import ItemDetails from './ItemDetails'

class ItemDetailsContainer extends React.Component {
  render(){
    const item = this.props.item
    if(!item) return null

    return <ItemDetails item={item}/>
  }
}

const mapStateToProps = (state) => {
  if(state.selectedItem !== null){
    return{
      item: state.items.find(item => item.id === state.selectedItem)
    }
  }
  return{}
}

export default connect(mapStateToProps)(ItemDetailsContainer)