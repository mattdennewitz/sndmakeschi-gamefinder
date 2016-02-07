export default (props) => {
  var frags = [];

  props.answers.forEach(answer => {
    if(answer.fragment) {
      frags.push(
        <span className="blue mx1" style={{cursor: 'pointer', display: 'inline-block', borderBottom: 'solid 2px #ddd'}}>
          {answer.fragment}
        </span>
      );
    }
  });

  if(frags.length < 1)
    return <span></span>;

  if(frags.length > 2) {
    frags.splice(-1, 0, <span>, and</span>);
  }

  return (
    <div>
      I want to {frags}
    </div>
  )
}
