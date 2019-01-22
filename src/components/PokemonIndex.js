import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const API = `http://localhost:3000/pokemon`

class PokemonPage extends React.Component {
  state = {
    pokemonArray: [],
    search: ''
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(pokemon => this.setState({pokemonArray: pokemon}))
  }

  handleSearch = (e, {value}) => {
    this.setState({search: value})
  }



  render() {

    let filterPokemon = this.state.pokemonArray.filter(p => p.name.includes(this.state.search))

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemonArray={filterPokemon} />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
