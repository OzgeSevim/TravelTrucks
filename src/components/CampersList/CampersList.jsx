import React, { useEffect } from "react";
import css from "./CampersList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loadMore } from "../../redux/campers/slice.js";
import { fetchCampers } from "../../redux/campers/operations.js";
import CamperCard from "../CamperCard/CamperCard.jsx";

const CamperList = ({ filters }) => {
  const dispatch = useDispatch();

  const { items, page, limit, loading, hasMore } = useSelector(
    (state) => state.campers
  );

  // Sayfa ilk yüklendiğinde veya filtre değiştiğinde verileri çek
  useEffect(() => {
    dispatch(fetchCampers({ page: 1, limit, filters }));
  }, [dispatch, filters, limit]);

  const handleLoadMore = () => {
    dispatch(loadMore()); // page +1
    dispatch(fetchCampers({ page: page + 1, limit, filters }));
  };

  return (
    <div>
      {/* Karavan Kartları */}
      <div className="camper-grid" style={{ display: "grid", gap: "1rem" }}>
        {items.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </div>

      {/* Load More Butonu */}
      {hasMore && (
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <button
            onClick={handleLoadMore}
            // style={{
            //   padding: "0.5rem 1rem",
            //   cursor: "pointer",
            //   fontSize: "1rem",
            // }}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CamperList;
