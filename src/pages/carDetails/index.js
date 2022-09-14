import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { CarDetailCard } from "../../components/carDetailCard";
import { GetCar } from "../../api/requests";
import "./style.css";
import { Car360Degree } from "../../components/car360Degree";

const CarDetail = () => {
  let params = useParams();
  const categoryName = useSelector((store) => store.categoryId.name);
  const [car, setCar] = useState();
  useEffect(() => {
    GetCar(params.id)
      .then((res) => setCar(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="main_section">
      <div className="main_button_wrapper">
        <Link to={"/admin"} className="btn_primary">
          <FontAwesomeIcon className="pr-5" icon={faUser} />
          Adminga o'tish
        </Link>
      </div>
      <div className="navigation_container">
        <Link to={"/"} className="navigation_text">
          {"Bosh sahifa > modellari"}
        </Link>
        <Link to={"/models"} className="navigation_text">
          {` > ${categoryName} turlari`}
        </Link>
      </div>
      <div className="models_container">
        <h2>Modellari</h2>
        {car?<div className="models_wrapper">
          <CarDetailCard car={car} />
          <Car360Degree car={car} />
        </div>:''}
      </div>
    </div>
  );
};

export default CarDetail;
