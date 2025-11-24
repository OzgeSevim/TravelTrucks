import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./campersThunks";

const initialState = {
  items: [],
  loading: false,
  error: null,
  page: 1,
  limit: 4,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    resetPage: (state) => {
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;

        // Load More mantığı
        if (state.page === 1) {
          state.items = action.payload;
        } else {
          state.items = [...state.items, ...action.payload];
        }
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { incrementPage, resetPage } = campersSlice.actions;

export default campersSlice.reducer;
