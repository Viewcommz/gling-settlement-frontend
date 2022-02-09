import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import SettlementDailyService from "api/services/settlement/daily";
import axios, { AxiosError } from "axios";

interface ServerError {
    errorMessage: string;
}
const name = "settlement/daily";

export const fetchDailyDatas = createAsyncThunk(`${name}/fetchDailyDatas`, async (apiParams: any, thunkAPI) => {
    try {
        let data = await SettlementDailyService.getDaily(apiParams);
        console.log("정산 일판매 데이터", data);
        return data;
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
    amount: number;
    result: any[];
    total: number;
    loading: boolean;
}
const initialState: State = {
    amount: 0,
    result: [],
    total: 0,
    loading: false,
};
export const dailySlice = createSlice({
    name,
    initialState,
    reducers: {
        // getDailyDatas(state, action:PayloadAction<{amount:number;result:any[],total:number}>){
        //     state.amount = action.payload.amount;
        //     state.result = action.payload.result;
        //     state.total = action.payload.total;
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDailyDatas.pending, (state, action) => {
            state.loading = true;
            console.log("호출전", fetchDailyDatas);
        });
        builder.addCase(fetchDailyDatas.fulfilled, (state, action) => {
            state.loading = false;
            console.log("action.payload", action.payload);
        });
        builder.addCase(fetchDailyDatas.rejected, (state, action) => {
            console.log("실패");
            state.loading = false;
        });
    },
});

export const dailyActions = dailySlice.actions;
export default dailySlice.reducer;
