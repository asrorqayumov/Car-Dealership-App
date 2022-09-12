import React, { useState } from "react";
import { ModalModel } from "../../components/modals/modalModel";
import { Navbar } from "../../components/navbar";
import { Sidebar } from "../../components/sidebar";
import { ModalCar } from "./../../components/modals/modalCar";
import { CarsContainer } from "../../components/carsContainer";
import "./style.css";

const Profile = () => {
  const [modelModalIsOpen, setModelModalIsOpen] = useState(false);
  const [carModalIsOpen, setCarModalIsOpen] = useState(false);
  const openModelModal = () => {
    setModelModalIsOpen(true);
  };
  const openCarModal = () => {
    setCarModalIsOpen(true);
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
        />
      </div>
    </div>
  );
};

export default Profile;
