import React from 'react'
import ItemList from './ItemList'
import { connect } from 'react-redux'

class ItemListContainer extends React.Component {
  render(){
    return <ItemList items={this.props.items}/>
  }
}

const mapStateToProps = (state) => {
  return {
    items: state
  }
}

export default connect(mapStateToProps)(ItemListContainer)