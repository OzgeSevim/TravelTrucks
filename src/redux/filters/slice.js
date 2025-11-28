import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  vehicleType: "",
  features: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
    toggleFeature: (state, action) => {
      const feature = action.payload;
      if (state.features.includes(feature)) {
        state.features = state.features.filter((f) => f !== feature);
      } else {
        state.features.push(feature);
      }
    },
    resetFilters: (state) => {
      state.location = "";
      state.vehicleType = "";
      state.features = [];
    },
  },
});

export const { setLocation, setVehicleType, toggleFeature, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
