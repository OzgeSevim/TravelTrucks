// src/components/Filters/VehicleEquipment.jsx
import { useDispatch, useSelector } from "react-redux";
import {
  setLocation,
  setVehicleType,
  toggleFeature,
} from "../../redux/filters/slice.js";
import css from "./Filters.module.css";
import {
  AC,
  Automatic,
  Kitchen,
  TV,
  Bathroom,
  Van,
  FullyIntegrated,
  Alcove,
} from "../../assets/Icons/Icons.jsx";
import { fetchCampers } from "../../redux/campers/operations.js";

const vehicleEquipmentList = [
  { label: "AC", icon: <AC /> },
  { label: "Automatic", icon: <Automatic /> },
  { label: "Kitchen", icon: <Kitchen /> },
  { label: "TV", icon: <TV /> },
  { label: "Bathroom", icon: <Bathroom /> },
];

const vehicleTypeList = [
  { label: "Van", icon: <Van /> },
  { label: "Alcove", icon: <Alcove /> },
  { label: "FullyIntegrated", icon: <FullyIntegrated /> },
];

const Filters = () => {
  const dispatch = useDispatch();

  const filters = useSelector((state) => state.filters);
  const { location, vehicleType, features } = filters;
  // const selected = useSelector((state) => state.filters.features);

  return (
    <div>
      <div>
        <label htmlFor="">Location</label>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => dispatch(setLocation(e.target.value))}
        />
      </div>

      <div>
        <h3>Vehicle equipment</h3>
        <div className={css.grid}>
          {vehicleEquipmentList.map((item) => {
            const isActive = features.includes(item.label);

            return (
              <div
                key={item.label}
                className={`${css.box} ${isActive ? css.active : ""}`}
                onClick={() => dispatch(toggleFeature(item.label))}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h3>Vehicle Types</h3>
        {vehicleTypeList.map((item) => {
          const isActive = vehicleType.includes(item.label);
          return (
            <div
              key={item.label}
              className={`${css.box} ${isActive ? css.active : ""}`}
              onClick={() => dispatch(setVehicleType(item.label))}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => dispatch(fetchCampers({ page: 1, limit: 4, filters }))}
      >
        Search
      </button>
    </div>
  );
};
export default Filters;
