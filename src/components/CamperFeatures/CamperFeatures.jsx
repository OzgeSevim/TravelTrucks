import React from "react";
import css from "./CamperFeatures.module.css";
import {
  AC,
  Automatic,
  Kitchen,
  TV,
  Bathroom,
  Radio,
  Refrigerator,
  Microwave,
  Gas,
  Water,
} from "../../assets/Icons/Icons.jsx";

export const camperEquipmentMap = [
  { key: "AC", label: "AC", icon: <AC /> },
  { key: "bathroom", label: "Bathroom", icon: <Bathroom /> },
  { key: "kitchen", label: "Kitchen", icon: <Kitchen /> },
  { key: "TV", label: "TV", icon: <TV /> },
  { key: "radio", label: "Radio", icon: <Radio /> },
  { key: "refrigerator", label: "Refrigerator", icon: <Refrigerator /> },
  { key: "microwave", label: "Microwave", icon: <Microwave /> },
  { key: "gas", label: "Gas", icon: <Gas /> },
  { key: "water", label: "Water", icon: <Water /> },
  {
    key: "transmission",
    value: "automatic",
    label: "Automatic",
    icon: <Automatic />,
  },
];

const CamperFeatures = ({ camper }) => {
  return (
    <div>
      <div className={css.equipmentList}>
        {camperEquipmentMap
          .filter((item) => {
            const val = camper[item.key];

            if (typeof val === "boolean") return val === true;
            if (item.value) return val === item.value;

            return false;
          })
          .map((item) => (
            <div key={item.key} className={css.equipmentBox}>
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
      </div>

      <div>
        <h3>Vehicle details</h3>
        <hr />
      </div>
      <div>
        <p>Form {camper.form}</p>
        <p>Length {camper.length}</p>
        <p>Width {camper.width}</p>
        <p>Height {camper.height}</p>
        <p>Tank {camper.tank}</p>
        <p>Consumption {camper.consumption}</p>
      </div>
    </div>
  );
};

export default CamperFeatures;
