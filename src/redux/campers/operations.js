import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

// export const fetchCampers = createAsyncThunk(
//   "campers/fetchCampers",
//   async ({ page, limit, filters }, thunkAPI) => {
//     try {
//       const params = { page, limit };

//       if (filters.location) params.location = filters.location;
//       if (filters.vehicleType) params.form = filters.vehicleType;

//       // FEATURE MAP
//       const map = {
//         AC: { type: "boolean", field: "AC" },
//         Kitchen: { type: "boolean", field: "kitchen" },
//         TV: { type: "boolean", field: "TV" },
//         Bathroom: { type: "boolean", field: "bathroom" },
//         Automatic: {
//           type: "string",
//           field: "transmission",
//           value: "automatic",
//         },
//       };

//       filters.features.forEach((feat) => {
//         const f = map[feat];
//         if (!f) return;

//         if (f.type === "boolean") params[f.field] = true;
//         if (f.type === "string") params[f.field] = f.value;
//       });

//       const response = await axios.get("/campers", { params });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async ({ page, limit, filters }, thunkAPI) => {
    try {
      const params = { page, limit };

      if (filters.location) params.location = filters.location;

      const vehicleTypeMap = {
        Van: "van",
        "Fully Integrated": "fullyIntegrated",
        Alcove: "alcove",
      };
      if (filters.vehicleType) {
        params.form = vehicleTypeMap[filters.vehicleType];
      }
      const map = {
        AC: { type: "boolean", field: "AC" },
        Kitchen: { type: "boolean", field: "kitchen" },
        TV: { type: "boolean", field: "TV" },
        Bathroom: { type: "boolean", field: "bathroom" },
        Automatic: {
          type: "string",
          field: "transmission",
          value: "automatic",
        },
      };

      filters.features.forEach((feat) => {
        const f = map[feat];
        if (!f) return;

        if (f.type === "boolean") params[f.field] = "true"; // string olarak gönder
        if (f.type === "string") params[f.field] = f.value;
      });

      const response = await axios.get("/campers", { params });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
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
