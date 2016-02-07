import React from 'react';
window.React = React;
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import { endSurvey, feelingLucky } from './actions';
import QuestionContainer from './containers/qna';
import SentenceFilter from './components/sentence-filter';
import GameList from './components/game-list';
import Question from './components/question';
import database from './database';
import configureStore from './store';

const store = configureStore({
  survey: {
    questions: database.questions,
    games: database.games,
    gamesFound: [],
    tags: [],
    fragments: [],
    currentQuestionId: 0,
    answers: [],
  }
});

class App extends React.Component {
  handleBail() {
    this.props.dispatch(endSurvey())
  }

  handleFeelingLucky() {
    this.props.dispatch(feelingLucky());
  }

  render() {
    const currentQuestion = this.props.questions[this.props.currentQuestionId];

    var displayElement;

    if(!this.props.surveyComplete) {
      displayElement = <QuestionContainer question={currentQuestion} currentQuestionId={this.props.currentQuestionId} />;
    } else {
      displayElement = <GameList games={this.props.gamesFound} answers={this.props.answers} />;
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
              {
                !this.props.surveyComplete &&
                <div className="p1">
                  <SentenceFilter answers={this.props.answers} />
                </div>
                || ''
              }

              <div className="p1">
                {
                  this.props.answers.length > 0 &&
                  this.props.gamesFound.length > 0 &&
                  !this.props.surveyComplete &&
                  <button onClick={this.handleBail.bind(this)} className="blue btn btn-outline">
                    {this.props.gamesFound.length} game{this.props.gamesFound.length !== 1 && 's' || ''} found. Show me these games!
                  </button>
                  || <span className="bold">No games found. Keep trying, or start over :|</span>
                }
              </div>

              <div className="p1">
                <button
                  onClick={this.handleFeelingLucky.bind(this)}
                  className="fuchsia btn btn-outline">
                  I'm feeling lucky
                </button>
              </div>
            </div>
        </footer>
      </div>
    );
  }
}

App = connect(
  (state) => {
    return {
      gamesFound: state.survey.gamesFound,
      tags: state.survey.tags,
      questions: state.survey.questions,
      currentQuestionId: state.survey.currentQuestionId,
      surveyComplete: state.survey.surveyComplete,
      answers: state.survey.answers,
    }
  }
)(App);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
