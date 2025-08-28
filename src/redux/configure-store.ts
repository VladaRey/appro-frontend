import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "../features/projects/projects-slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: projectsReducer,
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

// TODO: Remove
// window.store = store
