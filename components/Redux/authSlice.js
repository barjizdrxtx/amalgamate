import { createSlice } from "@reduxjs/toolkit";

const initialState = ({

    authState: false,


})

const authSlice = createSlice({

    name: "auth",
    initialState,
    reducers: {
        setAuthState(state, action) {
            state.authState = !state.authState
        }
    }

})


export const { setAuthState } = authSlice.actions;

export default authSlice.reducer;