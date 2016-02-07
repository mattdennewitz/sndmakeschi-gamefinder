export default (props) => {
  return (
    <button className="blue btn btn-outline" style={{width: '100%'}} onClick={() => props.onSelectAnswer(props.answer)}>
      {props.answer.text}
    </button>
  )
}
