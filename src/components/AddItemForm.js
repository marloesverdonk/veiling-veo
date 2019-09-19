import React from 'react'

export default class AddItemForm extends React.Component {

  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name

    this.setState({
      [name]: value
    })
  }

  handeleSubmit = (event) => {
    event.preventDefault()

    if (this.state.name && this.state.aanbieder && this.state.minBod && this.state.afnemer) {
      this.props.addItem({
        name: this.state.name,
        aanbieder: this.state.aanbieder,
        minBod: this.state.minBod,
        afnemer: this.state.afnemer,
        image: this.state.image
      })
    }
  }

  render() {
    return (
      <div>
        <h2>Add an item</h2>
        <form onSubmit={this.handeleSubmit}>

          <label>
            Name:
          <input type='text' name='name' onChange={this.handleChange} />
          </label>

          <br></br>

          <label>
            Aanbieder:
          <input type='text' name='aanbieder' onChange={this.handleChange} />
          </label>
          
          <br></br>

          <label>
            Voor:
          <input type='text' name='afnemer' onChange={this.handleChange} />
          </label>

          <br></br>

          <label>
            Minimum bod:
          <input type='number' name='minBod' onChange={this.handleChange} />
          </label>

          <br></br>

          <label>
            Afbeelding (url):
          <input type='string' name='image' onChange={this.handleChange} />
          </label>
          


          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}