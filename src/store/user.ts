import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

const test = createAction('test')
const initialUserState = {
  isPublisher: false,
  sociallogin_provider: null,
  user_created_at: '',
  user_email: '',
  user_nickname: '',
  user_pic_path: '',
  user_status: '',
}
// middleware test
export const middlewareTest = createAsyncThunk("TEST", async () => {
  const response = await new Promise((resolve,reject) => {
    setTimeout(()=>{
      resolve(true);
    },5000)
  })
  return response;
})

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUserInfo(state, { payload }) {
      // action 데이터 가져와서 state 업데이트
      console.log("user payload", payload);
      state.isPublisher = payload.isPublisher;
      state.sociallogin_provider = payload.sociallogin_provider;
      state.user_created_at = payload.user_created_at;
      state.user_email = payload.user_email;
      state.user_nickname = payload.user_nickname;
      state.user_pic_path = payload.user_pic_path;
      state.user_status = payload.user_status;
    },
    updateUserInfo(state, action) {
     //update 
    },
    deleteUserInfo(state, action) {
     //delete 
    },
  },
  extraReducers: (builder) => {
    builder.addCase(test, (state, action) => {
      console.log("state", state)
      console.log("action", action)
    })
  }
})

export const userActions = userSlice.actions; 
export default userSlice.reducer;