import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    user : null,
    isAuthenticated : false,
    isAuthLoading: true,
}

const AuthSlice = createSlice({
    name : "AuthSlice",
    initialState,
    reducers : {
        userLoggedIn:(state,action) => {
            state.user= action.payload.user
            state.isAuthenticated = true;
            state.isAuthLoading = false;
        },
        userLoggedOut:(state) => {
            state.user = null
            state.isAuthenticated = false;
            state.isAuthLoading = false;
        },
        setAuthLoading: (state, action) => {
            state.isAuthLoading = action.payload;
          },
    },
    })
export const {userLoggedIn,userLoggedOut} = AuthSlice.actions;
export default AuthSlice.reducer;

