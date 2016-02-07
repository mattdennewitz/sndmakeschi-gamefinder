// game collection

import _ from 'underscore';

import GameDetail from './game-detail';
import SentenceFilter from './sentence-filter';

export default (props) => {
  if(props.games.length === 0) {
    return 
  }

  const games = _(props.games).sortBy(game => {
    return -1 * game.score
  })

  return (
    <div className="md-col md-col-8 mx-auto">
      <div className="mx-auto">
        <h1 className="center">
          <SentenceFilter answers={props.answers} />
        </h1>

        <h4 className="center">
          {
            props.games.length > 2
            && <span>Found {props.games.length} game{props.games.length !== 1 && 's' || ''}</span>
          }
          {
            props.games.length === 0
            && <span>Nothing cooking there. Sorry :(</span>
            || ''
          }
        </h4>

        {props.games.map((game, i) => {
          return <div className="mx-auto" style={{maxWidth: 640}} key={'gamelist-' + i}><GameDetail game={game} /></div>
        })}
      </div>
    </div>
  )
}
