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
    <div className={css.featureContainer}>
      <div className={css.featureIcon}>
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

      <div className={css.featureTitle}>
        <h3>Vehicle details</h3>
        <hr />
      </div>
      <div className={css.featureList}>
        <div className={css.featureListItem}>
          <span>Form</span>
          <span>{camper.form}</span>
        </div>
        <div className={css.featureListItem}>
          <span>Length</span>
          <span>{camper.length}</span>
        </div>
        <div className={css.featureListItem}>
          <span>Width</span>
          <span>{camper.width}</span>
        </div>
        <div className={css.featureListItem}>
          <span>Height</span>
          <span>{camper.height}</span>
        </div>
        <div className={css.featureListItem}>
          <span>Tank</span>
          <span>{camper.tank}</span>
        </div>
        <div className={css.featureListItem}>
          <span>Consumption</span>
          <span>{camper.consumption}</span>
        </div>
      </div>
    </div>
  );
};

export default CamperFeatures;
