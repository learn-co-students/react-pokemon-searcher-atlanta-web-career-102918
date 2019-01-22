import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    picFlip: true
  }

  flipCard = () => {
   this.setState({
      picFlip: !this.state.picFlip
    })
  }


  whichSide = () => this.state.picflip ? this.props.singlePokemon.sprites.back : this.props.singlePokemon.sprites.front
  render() {
    return (
      <Card onClick={this.flipCard}>
        <div>
          <div className="image">
            <img src={this.whichSide} alt="pokemon"/>
          </div>
          <div className="content">
            <div className="header">{this.props.singlePokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
            {this.props.singlePokemon.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
