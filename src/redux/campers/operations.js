import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async ({ page, limit, filters }, thunkAPI) => {
    try {
      const params = { page, limit };

      if (filters) {
        // LOCATION
        if (filters.location) params.location = filters.location;

        // VEHICLE (form)
        if (filters.vehicleType) params.form = filters.vehicleType;

        // FEATURES (boolean fields)
        if (filters.features && filters.features.length > 0) {
          filters.features.forEach((feature) => {
            params[feature] = true; // Ör: params.AC = true
          });
        }
      }

      const response = await axios.get("campers", { params });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCampersById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
