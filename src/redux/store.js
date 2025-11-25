import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campers/slice.js";
import favoritesReducer from "./favorites/slice.js";
import filtersReducer from "./filters/slice.js";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
  },
});
