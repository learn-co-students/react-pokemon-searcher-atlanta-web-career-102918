import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

class PokemonPage extends React.Component {
  state = {
    pokemon: null,
    loading: true, 
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(pokemon => this.setState({ pokemon, loading: false }));
  }

  handleSearchChange = (e, { value }) => {
    let filteredPokemon = this.state.pokemon.filter((pokemon) => {
      return pokemon === value
    }) 
    this.setState({ pokemon: filteredPokemon })
  }

  render() {
    const { pokemon, loading } = this.state;
    return (
      <div>
        {loading === true ? (
          <p>Loading</p>
        ) : (
          <div>
            <h1>Pokemon Searcher</h1>
            <br />
            <Search
              onSearchChange={_.debounce(() => this.handleSearchChange, 500)}
              showNoResults={false}
            />
            <br />
            <PokemonCollection pokemon={pokemon} />
            <br />
            <PokemonForm />
          </div>
        )}
      </div>
    );
  }
}

export default PokemonPage;
