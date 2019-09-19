import React from 'react'
import DeleteItemForm from './DeleteItemForm'
import { connect } from 'react-redux'

class DeleteItemFormContainer extends React.Component{
  deleteItem = (item) => {
    this.props.dispatch({
      type: 'DELETE_ITEM',
      payload: {
        name: item.name
      }
    })
  }

  render(){
    return <DeleteItemForm deleteItem={this.deleteItem} />
  }
}

export default connect()(DeleteItemFormContainer)