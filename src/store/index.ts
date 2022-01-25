import { configureStore, combineReducers  } from "@reduxjs/toolkit";

import loginReducer from "./login";
import userReducer from "./user";

export const rootReducer = combineReducers ({
  login: loginReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer : rootReducer
});

export default store