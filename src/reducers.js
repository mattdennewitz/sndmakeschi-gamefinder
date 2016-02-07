import _ from 'underscore';

import {
  F_QUESTION_ANSWERED,
  F_END_SURVEY
} from './actions';

const defaultState = {
  tags: [],
  games: [],
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

    case F_QUESTION_ANSWERED:
      const refinementTags = action.answer.tags;

      // create a list of games whose tags match the tags
      // we're looking for
      var newGames;
      if(refinementTags.length > 0) {
        newGames = state.games.filter(game => {
          console.log(game.tags, refinementTags);
          return _(game.tags).intersection(refinementTags).length > 0;
        })
      } else {
        newGames = state.games.slice()
      }

      const nextQuestionId = ++state.currentQuestionId;

      var fragments = state.fragments.slice();
      fragments.push(action.answer.fragment);

      const newState = Object.assign({}, state, {
        fragments,
        tags: refinementTags,
        games: newGames,
        currentQuestion: nextQuestionId,
        surveyComplete: nextQuestionId === state.questions.length,
      });

      return newState;

    default:
      return state;
  }
}
