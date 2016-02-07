import { Component } from 'react';
import { connect } from 'react-redux';

import { answerQuestion } from '../actions';
import Answer from './answer';

class Question extends Component {
  render() {
    const { question, currentQuestionId, dispatch } = this.props;

    return (
      <div>
        {question.prompt}

        <ul className="list-unstyled answer-list">
          {question.answers.map((answer, i) => {
            return (
              <li key={'a-' + i}>
                <Answer answer={answer}
                  onSelectAnswer={
                    (answer) => dispatch(answerQuestion(currentQuestionId, answer))
                  } />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect()(Question);
