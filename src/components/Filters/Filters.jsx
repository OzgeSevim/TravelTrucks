// src/components/FilterBar.jsx
import React from "react";
import css from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setLocation,
  setVehicleType,
  toggleFeature,
} from "../../redux/filters/slice.js";

const featuresList = ["Klima", "Mutfak", "Banyo", "TV", "Radyo", "Buzdolabı"];

const Filters = ({ onApplyFilters }) => {
  const dispatch = useDispatch();
  const { location, vehicleType, features } = useSelector(
    (state) => state.filters
  );

  const handleLocationChange = (e) => dispatch(setLocation(e.target.value));
  const handleVehicleTypeChange = (e) =>
    dispatch(setVehicleType(e.target.value));
  const handleFeatureToggle = (feat) => dispatch(toggleFeature(feat));

  return (
    <div style={{ padding: "1rem", borderRight: "1px solid #ddd" }}>
      <h3>Filtreler</h3>

      {/* Konum */}
      <div style={{ marginBottom: "1rem" }}>
        <label>Konum:</label>
        <input type="text" value={location} onChange={handleLocationChange} />
      </div>

      {/* Araç Tipi */}
      <div>
        <label>Araç Tipi:</label>
        <select value={vehicleType} onChange={handleVehicleTypeChange}>
          <option value="">Hepsi</option>
          <option value="fullyIntegrated">fullyIntegrated</option>
          <option value="alcove">Alcove</option>
          <option value="panelTruck">panelTruck</option>
        </select>
      </div>

      {/* Ek Özellikler */}
      <div>
        <label>Ek Özellikler:</label>
        {featuresList.map((feat) => (
          <div key={feat}>
            <input
              type="checkbox"
              checked={features.includes(feat)}
              onChange={() => handleFeatureToggle(feat)}
            />
            <span>{feat}</span>
          </div>
        ))}
      </div>

      {/* Search Butonu */}
      <button onClick={onApplyFilters}>Search</button>
    </div>
  );
};

export default Filters;
