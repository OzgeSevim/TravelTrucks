import React, { useEffect } from "react";
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
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector((state) => state.campers.camperDetail);
  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [id, dispatch]);

  if (!camper) return <p>Loading...</p>;
  return (
    <div>
      <NavBar />
      <div className={css.camperDetailsPageContainer}>
        <CamperDetail camper={camper} />
        <div>
          <ReservationForm />

          {camper ? <CamperFeatures camper={camper} /> : <p>Loading...</p>}
        </div>
        <CamperReviews camper={camper} />
      </div>
    </div>
  );
};

export default CamperDetailsPage;
