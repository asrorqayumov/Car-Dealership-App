import React, { useEffect, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { GetCategoryCarsRequest } from "../../api/requests";

const CarModels = () => {
  const categoryId = useSelector((store) => store.categoryId.id);
  const [cars, setCars] = useState([]);
  useEffect(() => {
    GetCategoryCarsRequest(categoryId)
      .then((data) => setCars(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>car models</h1>
    </div>
  );
};

export default CarModels;
