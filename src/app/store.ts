import { configureStore, combineReducers } from "@reduxjs/toolkit";

import authReducer from "features/auth/authSlice";
import signInReducer from "features/auth/signInSlice";
import userReducer from "features/user/userSlice";
import dailyReducer from "features/sales-inquiry/inquirySlice";
import logger from "redux-logger";

export const rootReducer = combineReducers({
    auth: authReducer,
    signIn: signInReducer,
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
