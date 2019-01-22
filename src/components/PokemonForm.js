import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleAddName = (event) => {
  this.setState({name: event.target.value})
  }

  handleAddHp = (event) => {
  this.setState({hp: event.target.value})
  }

  handleAddFrontUrl = (event) => {
  this.setState({frontUrl: event.target.value})
  }

  handleAddBackUrl = (event) => {
  this.setState({backUrl: event.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        'Content-Type': 'Application/json',
        Accept: "application/json"
      },
      body: JSON.stringify(
        {
            name: this.state.name,
            stats: [
              {
                name: "hp",
                value: this.state.hp
              }
            ],
            sprites:
              {
                front: this.state.frontUrl,
                back: this.state.backUrl
              }
        }
      )
    })
    .then(response => response.json()).then(json => this.props.fetchPokemon())
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleAddName} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleAddHp} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleAddFrontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleAddBackUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}


export default PokemonForm
