import React from 'react';
window.React = React;
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import { endSurvey } from './actions';
import QuestionContainer from './containers/qna';
import GameList from './components/game-list';
import Question from './components/question';
import database from './database';
import configureStore from './store';

const store = configureStore({
  survey: {
    questions: database.questions,
    games: database.games,
    tags: [],
    fragments: [],
    currentQuestionId: 0
  }
});

class App extends React.Component {
  handleBail() {
    this.props.dispatch(endSurvey())
  }

  render() {
    const currentQuestion = this.props.questions[this.props.currentQuestionId];

    const sentence = 'I want to ' + this.props.fragments.filter(f => !!f).join(' ');
    console.log(sentence);
    var displayElement;

    if(!this.props.surveyComplete) {
      displayElement = <QuestionContainer question={currentQuestion} currentQuestionId={this.props.currentQuestionId} />;
    } else {
      displayElement = <GameList games={this.props.games} sentence={sentence} />;
    }

    return (
      <div className="flex flex-column" style={{minHeight: '100vh'}}>
        <header className="p2 clearfix">
          <div className="left">
            Gamefinder
          </div>
          <div className="right">
            <a href="/" className="btn btn-outline">Start a new search</a>
          </div>
        </header>

        <main className="flex flex-auto p2">
          {displayElement}
        </main>

        <footer className="p2">
            <div className="center">
              {this.props.tags.length > 0 && this.props.games.length &&
                <button onClick={this.handleBail.bind(this)} className="white btn btn-primary">Show me these games!</button>}
            </div>
        </footer>
      </div>
    );
  }
}

App = connect(
  (state) => {
    return {
      games: state.survey.games,
      tags: state.survey.tags,
      questions: state.survey.questions,
      currentQuestionId: state.survey.currentQuestionId,
      surveyComplete: state.survey.surveyComplete,
      fragments: state.survey.fragments,
    }
  }
)(App);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
