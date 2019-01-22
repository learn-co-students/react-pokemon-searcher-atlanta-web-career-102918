import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    showBack: false, 
    hp: 1000
  }

  render() {
    const { name, sprites } = this.props.pokemon
    const { front, back } = sprites
    const shown = this.state.showBack === false ? front : back
    return (
      <Card>
        <div onClick={() => this.setState({ showBack: !this.state.showBack })}>
          <div className="image">
            <img alt="oh no!" src={`${shown}`} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              <p>{this.state.hp}</p>
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
