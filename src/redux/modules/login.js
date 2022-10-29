import { fromJS, Map} from 'immutable';
import { INIT, LOGIN, LOGOUT } from '../constants/reduxFormConstants';

const initialState = {
  usersLogin: Map({
    email: '',
    user_name: '', 
    token: ''
  })
};
const initialImmutableState = fromJS(initialState);
export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case INIT:
      return state;
    case LOGIN:
      return state.withMutations((mutableState) => {
        mutableState.set('usersLogin', action.usersLogin);
      });
    case LOGOUT:
      return state.withMutations((mutableState) => {
        mutableState.set('usersLogin', Map());
      });
    default:
      return state;
  }
}

