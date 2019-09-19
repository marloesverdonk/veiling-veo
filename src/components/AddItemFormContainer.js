import React from 'react'
import AddItemForm from './AddItemForm'
import { connect } from 'react-redux'

class AddItemFormContainer extends React.Component{
  addItem = (item) => {
    this.props.dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: Math.ceil(Math.random()*10000),
        ...item
      }
    })
  }

  render(){
    return <AddItemForm addItem={this.addItem} />
  }
}

export default connect()(AddItemFormContainer)