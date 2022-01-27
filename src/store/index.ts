import { configureStore, combineReducers } from "@reduxjs/toolkit";

import loginReducer from "./login";
import userReducer from "./user";
import logger from "redux-logger";

export const rootReducer = combineReducers ({
  login: loginReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer : rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store