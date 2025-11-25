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
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        position: "relative",
      }}
    >
      {/* Favori Butonu */}
      <button
        onClick={handleFavorite}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1.2rem",
          color: isFavorite ? "red" : "gray",
        }}
      >
        {isFavorite ? "♥" : "♡"}
      </button>

      {/* Karavan Bilgileri */}
      <img
        src={camper.image || "https://via.placeholder.com/300x200"}
        alt={camper.name}
        style={{ width: "100%", borderRadius: "8px", marginBottom: "0.5rem" }}
      />
      <h3>{camper.name}</h3>
      <p>Tip: {camper.vehicleType || "Belirtilmemiş"}</p>
      <p>Fiyat: {camper.price?.toFixed(2) || "0.00"}₺ / gün</p>

      {/* Show More Butonu */}
      <button
        onClick={handleShowMore}
        style={{
          marginTop: "0.5rem",
          padding: "0.5rem 1rem",
          cursor: "pointer",
        }}
      >
        Show More
      </button>
    </div>
  );
};

export default CamperCard;
