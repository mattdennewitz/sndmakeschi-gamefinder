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

      // create a list of games whose tags match the tags
      // we're looking for
      var newGames;
      var gamePool = (state.tags.length > 0 && state.gamesFound.length > 0)
        ? state.gamesFound.slice()
        : state.games.slice();

      if(refinementTags.length > 0) {
        newGames = gamePool.filter(game => {
          return _(game.tags).intersection(refinementTags).length > 0;
        })
      } else {
        newGames = state.gamesFound.slice()
      }

      const nextQuestionId = ++state.currentQuestionId;

      var fragments = state.fragments.slice();
      fragments.push(action.answer.fragment);

      const newState = Object.assign({}, state, {
        fragments,
        tags: refinementTags,
        gamesFound: newGames,
        currentQuestion: nextQuestionId,
        surveyComplete: nextQuestionId === state.questions.length,
      });

      return newState;

    default:
      return state;
  }
}
