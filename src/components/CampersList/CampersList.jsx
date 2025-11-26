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
    <div className={css.camperListContainer}>
      <div className={css.camperList}>
        {items.map((camper, index) => (
          <CamperCard key={`${camper.id}-${index}`} camper={camper} />
        ))}
      </div>
      {hasMore && (
        <div>
          <button
            className={css.loadMoreButton}
            onClick={handleLoadMore}
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
