import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import SettlementDailyService, { DailyInquiryProps } from "api/services/sales-inquiry/daily";
import axios, { AxiosError } from "axios";

interface ServerError {
    errorMessage: string;
}
const name = "settlement/daily";

export const fetchDailyDatas = createAsyncThunk(
    `${name}/fetchDailyDatas`,
    async (apiParams: DailyInquiryProps, thunkAPI) => {
        try {
            let res = await SettlementDailyService.getDaily(apiParams);
            return res.data;
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const serverError = err as AxiosError<ServerError>;
                if (serverError && serverError.response) {
                    return thunkAPI.rejectWithValue(serverError.response.data);
                }
            }
        }
    },
);

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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDailyDatas.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchDailyDatas.fulfilled, (state, action) => {
            state.loading = true;
            //action.payload 대입
        });
        builder.addCase(fetchDailyDatas.rejected, (state, action) => {
            state.loading = true;
        });
    },
});

export const dailyActions = dailySlice.actions;
export default dailySlice.reducer;
