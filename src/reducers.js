import _ from 'underscore';

import {
  F_QUESTION_ANSWERED,
  F_END_SURVEY,
  F_FEELING_LUCKY
} from './actions';

const defaultState = {
  tags: [],
  games: [], // all games
  gamesFound: [], // filtered games
  questions: [],
  currentQuestionId: 0,
  fragments: [],
  answers: [],
}

export function surveyReducer(state=defaultState, action) {
  switch(action.type) {
    case F_END_SURVEY:
      // end the survey
      return Object.assign({}, state, {
        surveyComplete: true
      })

    case F_FEELING_LUCKY:
      return Object.assign({}, state, {
        surveyComplete: true,
        gamesFound: [_(state.games).sample()],
        fragments: ['feel lucky']
      })

    case F_QUESTION_ANSWERED:
      const refinementTags = action.answer.tags;
      const allAnswers = state.answers.concat([action.answer]);

      // create new game pool
      var gamePool;

      if(state.answers.length > 0 && state.gamesFound.length > 0) {
        gamePool = state.gamesFound.slice();
      } else {
        if(state.answers.length > 0) {
          gamePool = state.gamesFound.slice();
        } else {
          gamePool = state.games.slice();
        }
      }

      var newGames;

      // update pool with games filtered to answer's tags
      if(refinementTags.length > 0) {
        newGames = gamePool.filter(game => {
          return _(game.tags).intersection(refinementTags).length > 0;
        })
      } else {
        newGames = state.gamesFound.slice()
      }

      // get next question id
      const nextQuestionId = ++state.currentQuestionId;

      // add to fragments
      const fragments = state.fragments.concat([action.answer.fragment]);

      console.log(newGames);

      return Object.assign({}, state, {
        fragments,
        answers: allAnswers,
        gamesFound: newGames,
        currentQuestion: nextQuestionId,
        surveyComplete: nextQuestionId === state.questions.length,
      })

    default:
      return state;
  }
}
