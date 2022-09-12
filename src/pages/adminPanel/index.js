import React, { useState } from "react";
import { ModalModel } from "../../components/modals/modalModel";
import { Navbar } from "../../components/navbar";
import { Sidebar } from "../../components/sidebar";
import { ModalCar } from "./../../components/modals/modalCar";
import { CarsContainer } from "../../components/carsContainer";
import "./style.css";
import { EditCar } from './../../components/modals/editCar';

const Profile = () => {
  const [modelModalIsOpen, setModelModalIsOpen] = useState(false);
  const [carModalIsOpen, setCarModalIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [car,setCar]=useState({});
  const openModelModal = () => {
    setModelModalIsOpen(true);
  };
  const openCarModal = () => {
    setCarModalIsOpen(true);
  };
  const editHandler = (car) => {
    setCar(car);
    setModalIsOpen(true)
  };

  return (
    <div className="admin_container">
      <ModalModel isOpen={modelModalIsOpen} setOpen={setModelModalIsOpen} />
      <ModalCar isOpen={carModalIsOpen} setOpen={setCarModalIsOpen} />
      <EditCar currentCar={car} isOpen={modalIsOpen} setOpen={setModalIsOpen} />
      <Sidebar />
      <Navbar />
      <div className="section_cars">
        <CarsContainer
          openCarModal={openCarModal}
          openModelModal={openModelModal}
          editHandler={editHandler}
        />
      </div>
    </div>
  );
};

export default Profile;
