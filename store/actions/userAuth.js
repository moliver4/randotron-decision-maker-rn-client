export const LOGIN = 'LOGIN';
export const GUEST = 'GUEST';
export const LOGOUT = 'LOGOUT';
export const LOAD_QUESTIONS = 'LOAD_QUESTIONS'

  
export const login = (email, name, token) => {
    return {
        type: LOGIN, 
        user: {
            name: name, 
            email: email, 
            token: token
        }
    } 
};

export const loadQuestions = (questions) => {
    return {
        type: LOAD_QUESTIONS,
        questions: questions
    }
}