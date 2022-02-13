import { createAsyncThunk, createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import AuthService, { AuthProps } from "api/services/auth/auth";
import axios, { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { signInActions } from "./signInSlice";

// import type
import IAuthUser from "features/models/authUser/IAuthUser";
import IAsyncState from "features/models/IAsyncState";

interface ServerError {
    errorMessage: string;
}

interface Payload {
    data: any;
    status: string;
    message: string;
}

const name = "auth";
export const getAuth = createAsyncThunk<
    Payload,
    AuthProps,
    {
        rejectValue: { payload: { message: string } };
    }
>(`${name}/getAuth`, async (apiParams: AuthProps, thunkAPI) => {
    try {
        let res = await AuthService.signIn(apiParams);
        console.log("getAuth", res);
        return res.data;
    } catch (err) {
        console.log("async err1", err);
        return null;
        // return thunkAPI.rejectWithValue(err);
        // if (axios.isAxiosError(err)) {
        // console.log("async err2", err);
        // const serverError = err as AxiosError<ServerError>;
        // if (serverError && serverError.response) {
        //     // 에러 처리 수정 필요
        //     return thunkAPI.rejectWithValue(serverError.response.data);
        // }
        // }
    }
});

export interface IAuthUserState {
    authValue: IAsyncState<IAuthUser>;
}
const initialState: IAuthUserState = {
    authValue: {
        data: null,
        loading: false,
        error: false,
    },
};

const authSlice = createSlice({
    name: "getAuth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAuth.pending, (state, action) => {
            state.authValue.loading = true;
        });
        builder.addCase(getAuth.fulfilled, (state, action: PayloadAction<Payload>) => {
            console.log("success", action);
            state.authValue.loading = false;
            if (action.payload.status === "success") {
                state.authValue.data = action.payload.data;
            } else {
                state.authValue.error = action.payload.message;
                state.authValue.data = null;
            }
            console.log("success,", current(state));
        });
        builder.addCase(getAuth.rejected, (state, action) => {
            state.authValue.loading = false;
            // state.authValue.error = action.payload as string;
            console.log("state,", state, "error", action);
            // state.authValue.error = action.payload
            // state.error = action.payload
        });
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
