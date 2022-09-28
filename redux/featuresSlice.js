import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    darkmode: { payload: false },

    themeColor: { payload: "red" },

};

const featuresSlice = createSlice({

    name: "features",
    initialState,
    reducers: {
        setDarkTheme(state, actions) {
            state.darkmode = actions.payload;
        },
        setThemeColor(state, actions) {
            state.themeColor = actions.payload;
        },
    },

});

export const { setDarkTheme, setThemeColor } = featuresSlice.actions;

export default featuresSlice.reducer;
