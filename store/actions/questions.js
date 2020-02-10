export const LOAD_QUESTIONS = 'LOAD_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const LOAD_CURRENT_QUESTION = 'LOAD_CURRENT_QUESTION'
export const EDIT_QUESTION = 'EDIT_QUESTION'
export const DELETE_QUESTION = 'DELETE_QUESTION'


export const loadQuestions = (questions) => {
    return {
        type: LOAD_QUESTIONS,
        questions: questions
    }
}

export const loadCurrentQuestion = (question) => {
    return {
        type: LOAD_CURRENT_QUESTION,
        question: question
    }
}

export const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question: question
    }
}

export const editQuestion = (question) => {
    return {
        type: EDIT_QUESTION,
        question: question
    }
}

export const deleteQuestion = (question) => {
    return {
        type: DELETE_QUESTION,
        question: question
    }
}