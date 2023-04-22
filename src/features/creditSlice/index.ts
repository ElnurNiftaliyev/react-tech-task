import { createSlice } from "@reduxjs/toolkit";
import {store} from "../../app/store"

interface Payload {
    user: {
        [key: string]: Match;
    };
}

type Match = string | number;

const initialState: Payload = {
    user: {
        activitySector: "",
        monthlyIncome: 0,
        workExperienceM: 0,
        workExperienceD: 0,
        region: "",
        businessAddress: "",
        currency: "",
        description: "",
        amount: 0,
        period: "",
        percent: 0,
    },
};

export const creditSlice = createSlice({
    name: "credit",
    initialState,
    reducers: {
        updateCreditData: (state, action) => {
            state.user = { ...state.user, ...action.payload };
        },
    },
});

export const { updateCreditData } = creditSlice.actions;
export default creditSlice.reducer;
