export const LOAD_QUESTIONS = 'LOAD_QUESTIONS'
export const ADD_QUESTIONS = 'ADD_QUESTIONS'


export const loadQuestions = (questions) => {
    return {
        type: LOAD_QUESTIONS,
        questions: questions
    }
}

export const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question: question
    }
}