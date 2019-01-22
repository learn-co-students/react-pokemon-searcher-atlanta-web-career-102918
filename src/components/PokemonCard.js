import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    card: true
  }

  // findHP = () => {
  //   return this.props.pokemon.stats.find(stat => stat.name === 'hp').value
  // }

  flipCard = () => {
    this.setState({card: !this.state.card})
  }

  render() {

    let pokemon = this.props.pokemon
    let imgFlip = this.state.card ? pokemon.sprites.front : pokemon.sprites.back

    return (
      <Card>
        <div>
          <div onClick={() => this.flipCard()} className="image">
            <img src={imgFlip} alt={pokemon.id} />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
