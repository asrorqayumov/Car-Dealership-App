import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GetCategoryCarsRequest } from "../../api/requests";
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { CarModelsCard } from "../../components/carModelsCard";
import "./style.css";

const CarModels = () => {
  const categoryId = useSelector((store) => store.categoryId.id);
  const categoryName = useSelector((store) => store.categoryId.name);
  const [cars, setCars] = useState([]);
  useEffect(() => {
    GetCategoryCarsRequest(categoryId)
      .then((data) => setCars(data))
      .catch((err) => console.log(err));
  }, []);
  
  console.log(cars);
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
        <h2>Modellar turlari</h2>
        <div className="models_wrapper">
          {!cars.length==0? cars.map((item) => {
                return <CarModelsCard  key={item._id} car={item} />;
              })
            :<p className="not_available"> Ushbu turdagi avtomobillar hozircha mavjud emas.</p>}
        </div>
      </div>
    </div>
  );
};

export default CarModels;
