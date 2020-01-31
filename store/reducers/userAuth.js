import { LOGIN, LOGOUT, LOAD_QUESTIONS } from '../actions/userAuth';

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
  console.log(action)
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
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default reducer

