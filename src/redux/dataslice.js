import { createSlice } from '@reduxjs/toolkit';
import uiReducer from './modules/ui';
import initval from './modules/initForm';
import login from './modules/login';

export const DataSlice = createSlice({
  name: 'dataSlice',
  initialState: {
    message: 'Hello World',
  },
  reducers: {
    uiReducer,
    initval,
    login
  },
});

// Action creators are generated for each case reducer function
export const {
  updateMessage,
} = DataSlice.actions

export default DataSlice.reducer