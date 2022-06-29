import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './reducers/user';

const rootReducer = combineReducers({ user });

export const store = configureStore({ reducer: rootReducer });