import { LOGIN, LOGOUT, GUEST } from '../actions/userAuth';
import { LOAD_QUESTIONS, EDIT_QUESTION, LOAD_CURRENT_QUESTION, ADD_QUESTION } from '../actions/questions';

const initialState = {
  isLoggedIn: false,
  user: {
    name: '',
    email: '',
    id: null
  },
  questions: [],
  loaded: false,
  currentQuestion: {}
};

 const reducer = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: {...state.user, 
          ...action.user
        }
      };
    case GUEST:
      return {
        ...state,
        isLoggedIn: false,
        loaded: true,
        user: {...state.user, 
          ...action.user
        }
      }
    case LOAD_QUESTIONS:
      return {
        ...state,
        questions: action.questions,
        loaded: true
      } 
    case EDIT_QUESTION: 
      let newQuestions = state.questions.map(question => question.question.id === action.question.question.id? action.question : question)
      return {
        ...state,
        questions: newQuestions
      }
    case LOAD_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.question
      }
    case ADD_QUESTION: 

      return {
        ...state,
        questions: [action.question, ...state.questions]
      }
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default reducer

