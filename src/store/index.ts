import { configureStore, combineReducers  } from "@reduxjs/toolkit";

import loginReducer from './login';

const rootReducer = combineReducers ({
  login: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer : rootReducer
});

export default store