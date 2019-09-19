import React from 'react'
import ItemList from './ItemList'
import { connect } from 'react-redux'

class ItemListContainer extends React.Component {
  selectItem = (id) => {
    this.props.dispatch({
      type: 'SELECT_ITEM',  
      payload: id
    })
  }

  render(){
    return <ItemList items={this.props.items} selectItem={this.selectItem}/>
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(ItemListContainer)