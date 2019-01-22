import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const API = `http://localhost:3000/pokemon`

class PokemonPage extends React.Component {
  state = {
    pokemonArray: []
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(pokemon => this.setState({pokemonArray: pokemon}))
  }


  render() {

    console.log(this.state.pokemonArray)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemonArray={this.state.pokemonArray} />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
