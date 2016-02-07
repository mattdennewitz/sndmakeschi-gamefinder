import { createStore, combineReducers } from 'redux';

import { surveyReducer } from './reducers';

const rootReducer = combineReducers({
  survey: surveyReducer
})

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
