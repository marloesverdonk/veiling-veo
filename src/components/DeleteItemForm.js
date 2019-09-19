import React from 'react'

export default class DeleteItemForm extends React.Component {

  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name

    this.setState({
      [name]: value
    })
  }

  handeleSubmit = (event) => {
    event.preventDefault()

    if (this.state.name) {
      this.props.deleteItem({
        name: this.state.name,
      })
    }
  }

  render() {
    return (
      <div>
        <h2>Delete an item</h2>
        <form onSubmit={this.handeleSubmit}>

          <label>
            Name:
          <input type='text' name='name' onChange={this.handleChange} />
          </label>

    

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}