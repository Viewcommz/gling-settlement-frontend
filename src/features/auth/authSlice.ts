import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import AuthService, { AuthProps } from "api/services/auth/auth";
import axios, { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { signInActions } from "./signInSlice";

interface ServerError {
    errorMessage: string;
}
export interface Auth {
    auth: boolean;
    user: any;
    // user: {
    //     isPublisher: boolean;
    //     sociallogin_provider: string;
    //     user_created_at: string;
    //     use_email: string;
    //     user_nickname: string;
    //     user_pic_path: string;
    //     user_status: string;
    // }
}
const name = "auth";
export const getAuth = createAsyncThunk(`${name}/getAuth`, async (apiParams: AuthProps, thunkAPI) => {
    try {
        let res = await AuthService.signIn(apiParams);
        console.log("getAuth", res);
        return res.data;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            const serverError = err as AxiosError<ServerError>;
            if (serverError && serverError.response) {
                return thunkAPI.rejectWithValue(serverError.response.data);
            }
        }
    }
});

interface State {
    auth: boolean;
    user: any;
    loading: boolean;
    error: string;
}
const initialState: State = {
    auth: false,
    user: {},
    loading: false,
    error: "",
};
interface Payload {
    data: any;
    status: string;
    message: string;
}

const authSlice = createSlice({
    name: "getAuth",
    initialState: initialState,
    reducers: {
        // login(state, action) {
        //     if (action.payload === true) {
        //         state.isLoggedIn = true;
        //     }
        // },
        // logout(state) {
        //     state.isLoggedIn = false;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(getAuth.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getAuth.fulfilled, (state, action: PayloadAction<Payload>) => {
            state.loading = false;
            state.auth = action.payload.data.auth;
            state.user = action.payload.data.user;
            console.log("reducer 안", action.payload, action.payload.data.auth, action.payload.data.user);
        });
        builder.addCase(getAuth.rejected, (state, action) => {
            state.loading = false;
            // state.error = action.payload
        });
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
