import React from "react";
import css from "./CamperReviews.module.css";
import { FaStar } from "react-icons/fa";

const CamperReviews = ({ camper }) => {
  const reviews = camper.reviews;
  return (
    <div className={css.reviewsContainer}>
      {reviews.map((item) => {
        return (
          <div className={css.reviewsBox}>
            <div className={css.reviewsTitle}>
              <div className={css.reviewsTitleCircle}>
                <h2>{item.reviewer_name[0]}</h2>
              </div>
              <div className={css.reviewsRating}>
                <p>{item.reviewer_name}</p>
                <div className={css.starsRow}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      size={18}
                      color={
                        star <= item.reviewer_rating ? "#FFC531" : "#D1D5DB"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className={css.reviewsomment}>
              <p>{item.comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CamperReviews;
