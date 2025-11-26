import React from "react";
import css from "./CamperCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice.js";
import { useNavigate } from "react-router-dom";

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

  return (
    <div>
      {/* Favori Butonu */}
      <button onClick={handleFavorite}>{isFavorite ? "♥" : "♡"}</button>

      {/* Karavan Bilgileri */}
      <img
        src={
          camper.gallery?.[0]?.thumb || "https://via.placeholder.com/300x200"
        }
        alt={camper.name}
      />
      <h3>{camper.name}</h3>
      <p>Tip: {camper.vehicleType || "Belirtilmemiş"}</p>
      <p>Fiyat: {camper.price?.toFixed(2) || "0.00"}</p>

      {/* Show More Butonu */}
      <button onClick={handleShowMore}>Show More</button>
    </div>
  );
};

export default CamperCard;
