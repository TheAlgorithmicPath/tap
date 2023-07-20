import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { alertSlice } from "./alertSlice";
import { userSlice } from "./userSlice";
import { subjectsSlice } from "./subjectsSlice";
import { topicPageSlice } from "./topicPageSlice";

const rootReducer = combineReducers({
  alert: alertSlice.reducer,
  user: userSlice.reducer,
  subjects: subjectsSlice.reducer,
  topicPage: topicPageSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
