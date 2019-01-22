import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    allPokemon: [],
  }

  fetchPokemon =() => {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(json => this.setState ({
      allPokemon: json
    }))
  }

  componentDidMount =()=> {
    this.fetchPokemon()
  }

  render() {
    console.log(this.state.allPokemon)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />
        <br />
        <PokemonCollection allPokemon={this.state.allPokemon}/>
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
