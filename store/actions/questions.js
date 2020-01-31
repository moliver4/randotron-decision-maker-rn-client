export const LOAD_QUESTIONS = 'LOAD_QUESTIONS'


export const loadQuestions = (questions) => {
    return {
        type: LOAD_QUESTIONS,
        questions: questions
    }
}