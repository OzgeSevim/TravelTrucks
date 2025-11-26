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
  { label: "Fully Integrated", icon: <FullyIntegrated /> },
  { label: "Alcove", icon: <Alcove /> },
];

const Filters = () => {
  const dispatch = useDispatch();

  const filters = useSelector((state) => state.filters);
  const { location, vehicleType, features } = filters;

  return (
    <div className={css.filters}>
      <div className={css.filtersContainer}>
        <div className={css.firstFilter}>
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => dispatch(setLocation(e.target.value))}
          />
        </div>

        <p className={css.filterText}>Filters</p>

        <div className={css.secondFilter}>
          <h3>Vehicle equipment</h3>
          <hr />
          <div className={css.filterOptions}>
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

        <div className={css.thirdFilter}>
          <h3>Vehicle Types</h3>
          <hr />
          <div className={css.filterOptions}>
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
        </div>
      </div>

      <button
        className={css.filtersButton}
        onClick={() => dispatch(fetchCampers({ page: 1, limit: 4, filters }))}
      >
        Search
      </button>
    </div>
  );
};
export default Filters;
