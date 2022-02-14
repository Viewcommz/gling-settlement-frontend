import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
    name: "signIn",
    initialState: { isSignIn: false },
    reducers: {
        signIn(state) {
            state.isSignIn = true;
        },
        signOut(state) {
            state.isSignIn = false;
        },
    },
});

export const signInActions = signInSlice.actions;
export default signInSlice.reducer;
