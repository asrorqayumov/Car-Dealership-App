import React, { useState } from "react";
import { ModalModel } from "../../components/modals/modalModel";
import { Navbar } from "../../components/navbar";
import { Sidebar } from "../../components/sidebar";
import { ModalCar } from "./../../components/modals/modalCar";
import { CarsContainer } from "../../components/carsContainer";
import "./style.css";
import { useDispatch } from 'react-redux';
import { setCar } from "../../redux/reducers/carForEdit";
import { useNavigate } from "react-router";

const Profile = () => {
  const [modelModalIsOpen, setModelModalIsOpen] = useState(false);
  const [carModalIsOpen, setCarModalIsOpen] = useState(false);
  const navigate = useNavigate('')
  const dispatch =useDispatch()
  const openModelModal = () => {
    setModelModalIsOpen(true);
  };
  const openCarModal = () => {
    setCarModalIsOpen(true);
  };
  const editHandler = (car) => {
     dispatch(setCar(car));
     navigate('/edit-car')
  };

  return (
    <div className="admin_container">
      <ModalModel isOpen={modelModalIsOpen} setOpen={setModelModalIsOpen} />
      <ModalCar isOpen={carModalIsOpen} setOpen={setCarModalIsOpen} />
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
