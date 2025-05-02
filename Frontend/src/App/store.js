import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer.js";
import { authApi } from "../features/api/authApi.js";
import { courseApi } from "../features/api/courseApi.js";
import { enrollApi } from "../features/api/enrollApi.js";
import { sessionApi } from "../features/api/sessionApi.js";

const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(authApi.middleware, courseApi.middleware, enrollApi.middleware, sessionApi.middleware),
})
export default store;