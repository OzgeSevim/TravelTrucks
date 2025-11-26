import React from "react";
import css from "./CamperCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice.js";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { CiMap } from "react-icons/ci";
import { MdOutlineEuro } from "react-icons/md";
import {
  AC,
  Automatic,
  Kitchen,
  TV,
  Bathroom,
} from "../../assets/Icons/Icons.jsx";

const vehicleEquipmentList = [
  { key: "AC", label: "AC", icon: <AC /> },
  { key: "transmission", label: "Automatic", icon: <Automatic /> },
  { key: "kitchen", label: "Kitchen", icon: <Kitchen /> },
  { key: "TV", label: "TV", icon: <TV /> },
  { key: "bathroom", label: "Bathroom", icon: <Bathroom /> },
];

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((item) => item.id === camper.id);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper.id));
    } else {
      dispatch(addFavorite(camper));
    }
  };

  const handleShowMore = () => {
    navigate(`/catalog/${camper.id}`);
  };

  const averageRating = camper.reviews?.length
    ? camper.reviews.reduce((total, r) => total + r.reviewer_rating, 0) /
      camper.reviews.length
    : 0;

  const shortDescription =
    camper.description.length > 80
      ? camper.description.slice(0, 80) + "..."
      : camper.description;

  return (
    <div className={css.cardBorder}>
      <div className={css.camperCardContainer}>
        <div className={css.camperImage}>
          <img src={camper.gallery?.[0]?.thumb} alt={camper.name} />
        </div>
        <div className={css.camperInfo}>
          <div className={css.firstLine}>
            <div className={css.camperTitle}>
              <h2>{camper.name}</h2>
            </div>
            <div className={css.camperPrice}>
              <h2>
                <MdOutlineEuro />
                {camper.price?.toFixed(2)}
              </h2>
              <button onClick={handleFavorite}>
                <FaRegHeart size={20} />
              </button>
            </div>
          </div>
          <div className={css.secondLine}>
            <div className={css.camperReviews}>
              <p>
                <FaStar size={14} color="#FFC531" />
                {averageRating.toFixed(1)}
              </p>
              <p>({camper.reviews.length} reviews)</p>
            </div>
            <div className={css.camperLocation}>
              <p>
                <CiMap size={18} />
              </p>
              <p>{camper.location}</p>
            </div>
          </div>
          <div className={css.thirdLine}>
            <p>{shortDescription}</p>
          </div>
          <div className={css.fourthLine}>
            {vehicleEquipmentList
              .filter((item) => camper[item.key])
              .map((item) => (
                <p key={item.key} className={css.box}>
                  {item.icon} {item.label}
                </p>
              ))}
          </div>
          <div>
            <button className={css.showMoreButton} onClick={handleShowMore}>
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
