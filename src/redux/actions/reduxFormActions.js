import * as types from '../constants/reduxFormConstants';

export const initAction = (data) => ({ type: types.INIT, data });
export const clearAction = { type: types.CLEAR };

export const setLoginUserInfo = usersLogin => ({
    type: types.LOGIN,
    usersLogin
  });
  
export const setLogout = { type: types.LOGOUT };