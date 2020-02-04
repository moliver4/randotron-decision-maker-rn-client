import { LOGIN, LOGOUT, GUEST } from '../actions/userAuth';
import { LOAD_QUESTIONS, ADD_QUESTION } from '../actions/questions';

const initialState = {
  isLoggedIn: false,
  user: {
    name: '',
    email: '',
    id: null
  },
  questions: [],
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
    case LOAD_QUESTIONS:
      return {
        ...state,
        questions: action.questions
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

