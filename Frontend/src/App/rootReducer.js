import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "../features/api/authApi.js";
import AuthReducer from "../features/AuthSlice.js";
import { courseApi } from "../features/api/courseApi.js";
import { enrollApi } from "../features/api/enrollApi.js";
import { sessionApi } from "../features/api/sessionApi.js";

const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [courseApi.reducerPath]:courseApi.reducer,
    [enrollApi.reducerPath]: enrollApi.reducer,
    [sessionApi.reducerPath]: sessionApi.reducer,
    auth: AuthReducer
})
export default rootReducer;