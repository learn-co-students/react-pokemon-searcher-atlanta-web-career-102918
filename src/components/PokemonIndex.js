import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

class PokemonPage extends React.Component {
  state = {
    pokemon: null,
    loading: true, 
    filteredPokemon: null
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(pokemon => this.setState({ pokemon, loading: false, filteredPokemon: pokemon }));
  }

  handleSearchChange = (e, { value }) => {
    console.log(this.state.pokemon)
    let filteredPokemon = this.state.pokemon.filter((pokemon) => {
      console.log('From inside the filter:', pokemon.name)
      return pokemon.name.includes(value)
    }) 
    console.log('Input Value:', value)
    console.log('Filtered Pokemon:', filteredPokemon)
    this.setState({ filteredPokemon })
  }

  render() {
    const { loading, filteredPokemon } = this.state;
    return (
      <div>
        {loading === true ? (
          <p>Loading</p>
        ) : (
          <div>
            <h1>Pokemon Searcher</h1>
            <br />
            <Search
              onSearchChange={_.debounce(this.handleSearchChange, 500)}
              showNoResults={false}
            />
            <br />
            <PokemonCollection pokemon={filteredPokemon} />
            <br />
            <PokemonForm />
          </div>
        )}
      </div>
    );
  }
}

export default PokemonPage;
