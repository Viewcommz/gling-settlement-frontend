import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import AuthService, { AuthProps } from "api/services/auth/auth";
import { signInActions } from "./signInSlice";
import { Dispatch } from "app/store";
import IAuthUser from "features/models/authUser/IAuthUser";
import { IAsyncState, IPayload } from "features/models/common";

// 1. 비동기 처리를 위해 createAsyncThunk를 사용합니다.
const name = "auth"; // 액션타입문자열
export const getAuth = createAsyncThunk<
    IPayload, // 1-1. thunk action creator가 dispatch하는 액션 type (일반 리덕스와 달리 알아서 dispatch해줍니다.)
    AuthProps, // 1-2. 비동기함수 promiseCreator 의 인자 type
    {
        dispatch: Dispatch;
        rejectValue: { message: string };
    } // 1-3. 옵션 필드. thunkApi 필드 타입을 정의합니다.
>(`${name}/getAuth`, async (apiParams: AuthProps, thunkAPI) => {
    try {
        let res = await AuthService.signIn(apiParams); // 1-4. api 폴더에서 promise를 반환하는 비동기함수를 호출합니다.
        if (res.data.status === "success") {
            thunkAPI.dispatch(signInActions.signIn());
        } else {
        }
        return res.data;
    } catch (err) {
        // 1-5. 에러처리
        /**
         * rejectWithValue 메서드를 사용하면 action.payload에 값이 담겨져서 slice내에서 처리 가능합니다.
         * 또는 컴포넌트에서 unwrap 메서드를 이용해 개별 오류처리도 가능합니다.
         */
        return thunkAPI.rejectWithValue({
            message: "로그인 오류 발생",
        });
        // 토큰 api 에러처리 필요
    }
});

// features/models에 비동기처리에 필요한 type들을 모아놨습니다.
// IAsyncState의 제네릭타입으로 필요한 데이터 타입을 지정해주세요.
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
    reducers: {
        clearError(state) {
            state.authValue.error = false;
        },
    }, //비동기처리가 필요없이 자동으로 action 객체를 반환하면 될 때 사용하시면 됩니다.
    extraReducers: (builder) => {
        // thunk action creator가 액션을 디스패치하면서 아래 과정들이 차례로 실행됩니다.
        builder.addCase(getAuth.pending, (state, action) => {
            // 프로미스반환전
            state.authValue.loading = true;
        });
        builder.addCase(getAuth.fulfilled, (state, action: PayloadAction<IPayload>) => {
            //프로미스 이행된상태
            state.authValue.loading = false;
            if (action.payload.status === "success") {
                state.authValue.data = action.payload.data;
                state.authValue.error = false;
            } else {
                state.authValue.error = action.payload.message;
                state.authValue.data = null;
            }
        });
        builder.addCase(getAuth.rejected, (state, action) => {
            //프로미스 거부된상태
            state.authValue.loading = false;
            state.authValue.error = action.payload ? action.payload.message : false;
        });
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
