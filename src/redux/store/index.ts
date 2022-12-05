import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profile";


const comboReducer = combineReducers({
  loadedProfile: profileReducer,
});

const store = configureStore({
  reducer: comboReducer,
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;