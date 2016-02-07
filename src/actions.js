export const F_LOAD_GAMES = 'survey:bootstrap';
export const F_QUESTION_ANSWERED = 'survey:store-answer';

export function answerQuestion(questionId, answer) {
  console.log('firing answerQuestion', answer);

  return {
    type: F_QUESTION_ANSWERED,
    answer
  }
}
