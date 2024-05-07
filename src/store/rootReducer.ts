import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from './home';
export const rootReducer = combineReducers({
  home: homeReducer,
});
