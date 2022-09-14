import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { CarItem } from "../carItem";
import { useSelector, useDispatch } from "react-redux";
import { GetAllCars } from "./../../redux/reducers/cars";
import { DeleteCar } from "../../api/requests";
import { Alert } from "../../utils/SweetAlert";


export const CarsContainer = ({
  openModelModal,
  openCarModal,
  editHandler,
}) => {
  const cars = useSelector((store) => store.cars.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCars());
  }, []);

  const deleteHandler = async (id) => {
    try {
      const req = await DeleteCar(id);
      dispatch(GetAllCars());
      Alert("success", "Car deleted successfully");
    } catch (err) {
      Alert("error", `${err}`);
    }
  };

  return (
    <>
      <div className="cars_wrapper">
        <div className="car_header">
          <div>
            <p className="before_title car_title_before"></p>
            <h2>Mashinalar</h2>
          </div>
          <div>
            <button className="btn_primary mr-4" onClick={openModelModal}>
              <FontAwesomeIcon className="pr-1" icon={faPlus} />
              Kategoriya qo'shish
            </button>
            <button className="btn_primary" onClick={openCarModal}>
              <FontAwesomeIcon className="pr-1" icon={faPlus} />
              Mashina qo'shish
            </button>
          </div>
        </div>
        <div className="car_table_wrapper">
          <ul className="car_list header_list">
            <li className="car_list_item">#</li>
            <li className="car_list_item">Markasi</li>
            <li className="car_list_item">Gearbook</li>
            <li className="car_list_item">Tanirovkasi</li>
            <li className="car_list_item">Motor</li>
            <li className="car_list_item">Year</li>
            <li className="car_list_item">Color</li>
            <li className="car_list_item">Distance</li>
            <li className="car_list_item_last "></li>
            <li className="car_list_item_last"></li>
          </ul>
          {!cars.length == 0
            ? cars.map((car, index) => {
                return (
                  <CarItem
                    key={car._id}
                    index={(index += 1)}
                    car={car}
                    deleteHandler={deleteHandler}
                    editHandler={editHandler}
                  />
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};
