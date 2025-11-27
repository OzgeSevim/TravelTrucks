import React from "react";
import css from "./CamperDetail.module.css";
import { FaStar } from "react-icons/fa";
import { CiMap } from "react-icons/ci";
import { MdOutlineEuro } from "react-icons/md";

const CamperDetail = ({ camper }) => {
  const averageRating = camper.reviews?.length
    ? camper.reviews.reduce((total, r) => total + r.reviewer_rating, 0) /
      camper.reviews.length
    : 0;

  if (!camper) return <p>Loading...</p>;
  return (
    <div className={css.camperDetailContainer}>
      <div className={css.camperDetailTitle}>
        <h2>{camper.name}</h2>
        <div className={css.camperTitleReviewsLocation}>
          <div className={css.camperTitleReviews}>
            <p>
              <FaStar size={14} color="#FFC531" />
              {averageRating.toFixed(1)}
            </p>
            <p>({camper.reviews.length} reviews)</p>
          </div>
          <div className={css.camperTitleLocation}>
            <p>
              <CiMap size={18} />
            </p>
            <p>{camper.location}</p>
          </div>
        </div>
        <div className={css.camperTitlePrice}>
          <h2>
            <MdOutlineEuro />
            {camper.price?.toFixed(2)}
          </h2>
        </div>
      </div>
      <div className={css.camperDetailGallery}>
        {camper.gallery.map((item, index) => (
          <img key={index} src={item.thumb} alt={`camper-${index}`} />
        ))}
      </div>
      <div className={css.camperDetailDescription}>
        <p>{camper.description}</p>
      </div>
    </div>
  );
};

export default CamperDetail;
