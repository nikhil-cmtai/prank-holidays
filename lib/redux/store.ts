import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./features/gallerSlice";

export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;