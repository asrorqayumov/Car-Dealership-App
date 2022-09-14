import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import { CreateCategory, FileUpload } from "../../api/requests";
import { useEffect } from "react";
import { Alert } from "../../utils/SweetAlert";
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
  useEffect(() => {
    if (name && imgUrl) {
      CreateCategory({ name, imgUrl })
        .then((res) => {
          setOpen(false);
          setImgUrl("");
          setName("");
          Alert("success", "Category created successfully");
        })
        .catch((err) => Alert("error", err));
    }
  }, [imgUrl]);

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const file = await FileUpload(formdata);
      setImgUrl(file.data.data);
    } catch (err) {
      Alert("error", err);
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
             
              <label className="login_label" htmlFor="imgUrl">
                Rasm
              </label>
              <input
                className="input input_file"
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
