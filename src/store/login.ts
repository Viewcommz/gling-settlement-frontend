import { createSlice } from "@reduxjs/toolkit";

// const initialAuthState = {
//   isLoggedIn : false
// }

const loginSlice = createSlice({
  name: 'login',
  initialState: {isLoggedIn : false},
  reducers: {
    login(state, action) {
      if (action.payload === true) {
        state.isLoggedIn = true;
      } 
    },
    logout(state) {
      state.isLoggedIn = false;
    }
  }
})

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;