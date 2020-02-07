import { LOGIN, LOGOUT, GUEST } from '../actions/userAuth';
import { LOAD_QUESTIONS, LOAD_CURRENT_QUESTION, ADD_QUESTION } from '../actions/questions';

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
    case LOAD_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.question
      }
    case ADD_QUESTION: 
      console.log('ADDING QUESTION IN REDUCER', action.question)
      return {
        ...state,
        questions: [...state.questions, action.question]
      }
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default reducer

