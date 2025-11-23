import React from "react";
import css from "./HomePage.module.css";
import NavBar from "../../components/NavBar/NavBar.jsx";

const HomePage = () => {
  return (
    <div className={css.homePageContainer}>
      <NavBar />
      <div className={css.homePage}>
        <div className={css.homePageTitle}>
          <h1>Campers of your dreams</h1>
          <h2>You can find everything you want in our catalog</h2>
        </div>
        <button className={css.homePageButton}>View Now</button>
      </div>
    </div>
  );
};

export default HomePage;
