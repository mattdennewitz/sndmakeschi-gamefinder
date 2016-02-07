// game collection

import GameDetail from './game-detail';

export default (props) => {
  return (
    <div className="mx-auto">
      <h1>
        {props.sentence}
      </h1>

      <h4>
        Found {props.games.length} game{props.games.length !== 1 && 's' || ''}
      </h4>

      {props.games.map((game, i) => {
        return <div style={{maxWidth: 640}} key={'gamelist-' + i}><GameDetail game={game} /></div>
      })}
    </div>
  )
}
