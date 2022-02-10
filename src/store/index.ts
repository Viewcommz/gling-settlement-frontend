import { configureStore, combineReducers } from "@reduxjs/toolkit";

import loginReducer from "./login";
import userReducer from "./user";
import dailyReducer from "./settlement/daily";
import logger from "redux-logger";

export const rootReducer = combineReducers({
    login: loginReducer,
    user: userReducer,
    daily: dailyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
