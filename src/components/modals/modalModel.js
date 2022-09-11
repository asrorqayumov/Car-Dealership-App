import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import { CreateCategory, FileUpload } from "../../api/requests";
Modal.setAppElement("#root");

export const ModalModel = ({ isOpen, setOpen }) => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const formdata = new FormData();

  const fileHandler = async (e) => {
    const file = e.target.files[0];
    if (e.target && file) {
      formdata.append("file", file);
    }
  };

  const inputHandler = (e) => {
    setName(e.target.value);
  };

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const file =   await FileUpload(formdata)
      console.log(file);
      const create = await CreateCategory({ name, imgUrl });
      console.log(create);
     
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={setOpen}
      className="react-card-modal"
    >
      <div className="modal_title">
        <div>
          <p className="before_title"></p>
          <h2>Mashina qo'shish</h2>
        </div>
        <button className="modal_close_btn" onClick={() => setOpen(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div className="modal_body">
        <form className="form_modal" onSubmit={formHandler}>
          <div className="d-flex">
            <div className="form_group modal_form">
              <label className="login_label" htmlFor="name">
                Markasi
              </label>
              <input
                className="input"
                type="text"
                name="name"
                id="name"
                placeholder="Kiriting"
                onChange={inputHandler}
                required
              />
            </div>
            <div className="form_group modal_form">
              <p className="login_label">Rasmi</p>
              <label className="input img-label" htmlFor="imgUrl">
                <FontAwesomeIcon className="camera_icon" icon={faCamera} />
                Yuklash
              </label>
              <input
                className="input_file"
                type="file"
                name="imgUrl"
                id="imgUrl"
                onChange={fileHandler}
                required
              />
            </div>
          </div>
          <div className="form_group_last modal_last">
            <button type="submit" className="btn_primary">
              Saqlash
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
