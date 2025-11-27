import React, { use } from "react";
import css from "./CamperReviews.module.css";

const CamperReviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map((item) => (
        <div></div>
      ))}
    </div>
  );
};

export default CamperReviews;
