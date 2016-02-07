// game list detail view

export default (props) => {
  const { game } = props;
  const youtubeUrl = 'http://www.youtube.com/embed/' + game.youtubeId;

  var curatorEl;
  if(game.curator) {
    curatorEl = (
      <div className="right-align">
        <i className="blue fa fa-check"></i>{' '}
        In <span className="blue">{game.curator.playlist}</span>{' '}
        by <span className="blue">{game.curator.name}</span>
      </div>
    );
  }

  return (
    <div className="py2">
      <h1 className="center">{game.name}</h1>
      <div className="embed-container">
        <iframe src={youtubeUrl} frameborder='0' allowfullscreen></iframe>
      </div>
      <div className="px3">
        <article className="py2">
          <p className="mb2">{game.description}</p>
          <p className="mb2 right-align">Our Score: {game.score}/5</p>
          {curatorEl}
        </article>
      </div>
    </div>
  )
}
