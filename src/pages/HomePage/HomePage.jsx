import React from "react";
import css from "./HomePage.module.css";
import NavBar from "../../components/NavBar/NavBar.jsx";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={css.homePageContainer}>
      <NavBar />
      <div className={css.homePage}>
        <div className={css.homePageTitle}>
          <h1>Campers of your dreams</h1>
          <h2>You can find everything you want in our catalog</h2>
        </div>
        <button
          className={css.homePageButton}
          onClick={() => navigate("/catalog")}
        >
          View Now
        </button>
      </div>
    </div>
  );
};

export default HomePage;
