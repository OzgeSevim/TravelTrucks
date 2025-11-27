import React, { useEffect, useState } from "react";
import css from "./CamperDetailsPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import ReservationForm from "../../components/ReservationForm/ReservationForm";
import CamperFeatures from "../../components/CamperFeatures/CamperFeatures";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operations";
import { useParams } from "react-router-dom";
import CamperReviews from "../../components/CamperReviews/CamperReviews";
import CamperDetail from "../../components/CamperDetail/CamperDetail";

const CamperDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("features");
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector((state) => state.campers.camperDetail);
  const { error, loading } = useSelector((state) => state.campers);
  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [id, dispatch]);

  if (!camper) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading camper.</p>;
  return (
    <div>
      <NavBar />
      <div className={css.camperDetailsPageContainer}>
        <CamperDetail camper={camper} />

        <div className={css.tabs}>
          <button
            className={`${css.tab} ${
              activeTab === "features" ? css.active : ""
            }`}
            onClick={() => setActiveTab("features")}
          >
            Features
          </button>

          <button
            className={`${css.tab} ${
              activeTab === "reviews" ? css.active : ""
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>
        <div className={css.detailTabsContainer}>
          <div className={css.tabContent}>
            {activeTab === "features" && <CamperFeatures camper={camper} />}
            {activeTab === "reviews" && <CamperReviews camper={camper} />}
          </div>
          <div className={css.camperDetailPageForm}>
            <ReservationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamperDetailsPage;
