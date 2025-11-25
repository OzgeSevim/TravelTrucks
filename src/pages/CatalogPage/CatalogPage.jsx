import React, { useState } from "react";
import css from "./CatalogPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import CamperList from "../../components/CampersList/CampersList.jsx";
import { useSelector } from "react-redux";
import Filters from "../../components/Filters/Filters.jsx";

const CatalogPage = () => {
  const filters = useSelector((state) => state.filters);
  const [appliedFilters, setAppliedFilters] = useState(filters);

  const handleApplyFilters = () => {
    setAppliedFilters(filters);
  };
  return (
    <div>
      <NavBar />
      <Filters onApplyFilters={handleApplyFilters} />
      <CamperList filters={appliedFilters} />
    </div>
  );
};

export default CatalogPage;
