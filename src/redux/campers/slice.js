import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./operations.js";

const initialState = {
  items: [],
  camperDetail: null,
  page: 1,
  limit: 4,
  loading: false,
  error: null,
  hasMore: true,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    resetCaravans: (state) => {
      state.items = [];
      state.page = 1;
      state.hasMore = true;
    },
    loadMore: (state) => {
      state.page += 1;
    },
    clearCamperDetail: (state) => {
      state.camperDetail = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Listeleme
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload.items];

        state.loading = false;
        if (action.payload.length < state.limit) state.hasMore = false;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Detay
      .addCase(fetchCamperById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.camperDetail = action.payload;
        state.loading = false;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCaravans, loadMore, clearCamperDetail } =
  campersSlice.actions;
export default campersSlice.reducer;
