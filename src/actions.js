export const F_LOAD_GAMES = 'survey:bootstrap';
export const F_END_SURVEY = 'survey:end';
export const F_FEELING_LUCKY = 'survey:lucky';
export const F_QUESTION_ANSWERED = 'survey:store-answer';

export function endSurvey() {
  return {
    type: F_END_SURVEY,
  }  
}

export function feelingLucky() {
  return {
    type: F_FEELING_LUCKY,
  }
}

export function answerQuestion(questionId, answer) {
  return {
    type: F_QUESTION_ANSWERED,
    answer
  }
}
