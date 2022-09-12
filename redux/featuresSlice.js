import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    darkmode: false,

};

const featuresSlice = createSlice({

    name: "features",
    initialState,
    reducers: {
        setDarkTheme(state) {
            state.darkmode = !state.darkmode;
        },
    },

});

export const { setDarkTheme } = featuresSlice.actions;

export default featuresSlice.reducer;
