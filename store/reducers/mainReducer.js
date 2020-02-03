import { LOGIN, LOGOUT, GUEST } from '../actions/userAuth';
import { LOAD_QUESTIONS } from '../actions/questions';

const initialState = {
  isLoggedIn: false,
  user: {
    name: '',
    email: '',
    token: null
  },
  questions: []
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
      console.log('IM HEREEEEEEEEEEEEE', action.questions)
      return {
        ...state,
        questions: action.questions
      } 
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default reducer

