import React, { useState } from 'react';
import { ModalModel } from '../../components/modals/modalModel';
import { ModalCar } from './../../components/modals/modalCar';


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
        <>
        <ModalModel  isOpen={modelModalIsOpen} setOpen={setModelModalIsOpen} />
        <ModalCar isOpen={carModalIsOpen} setOpen={setCarModalIsOpen}   />
        <div>
            <button  onClick={openModelModal}>open model</button>
            <button  onClick={openCarModal}>open car</button>
        </div>
        </>
    );
};



export default Profile;