// question page

import Question from '../components/question';

export default (props) => {
  return (
    <div className="flex flex-auto flex-center mx-auto center">
      <div className="mx-auto" style={{minWidth: 480}}>
        <Question question={props.question} uiId={props.currentQuestionId} />
      </div>
    </div>
  );
}
