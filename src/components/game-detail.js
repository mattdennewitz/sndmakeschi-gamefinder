// game list detail view

export default (props) => {
  const { game } = props;

  console.log(game);

  return (
    <div className="py2">
      <h1 className="center">{game.name}</h1>
      <div className="embed-container">
        <iframe src='http://www.youtube.com/embed/{game.youtubeId}' frameborder='0' allowfullscreen></iframe>
      </div>
      <div className="px3">
        <article className="py2"><p>{game.description}</p></article>
      </div>
    </div>
  )
}
