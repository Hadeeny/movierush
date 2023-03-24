import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./features/movieSlice";
const store = configureStore({
  reducer: {
    allMovie: movieSlice
  },
});

export default store;

