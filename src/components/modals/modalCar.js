import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import { CreateCategory, FileUpload } from "../../api/requests";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "./../../redux/reducers/category";
import { FormGroup } from "../formGroup";
Modal.setAppElement("#root");

export const ModalCar = ({ isOpen, setOpen }) => {
  const [car, setCar] = useState({
    imgUrl: "",
    imgUrlInside: "",
    imgUrlAutside: "",
    price: "",
    year: "",
    description: "",
    tonirovka: "",
    motor: "",
    color: "",
    distance: "",
    gearbok: "",
    categoryId: "",
  });
  const categorys = useSelector((store) => store.categorys.categorys);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  
  const inputHandler = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
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
        <form className="form_modal" onSubmit="">
          <div className="d-flex">
            <div className="form_group modal_form">
              <label className="login_label" htmlFor="categoryId">
                Markasi
              </label>
              <select name="categoryId" className="input"  onChange={inputHandler} id="categoryId">
                {categorys.map((item) => {
                  return <option key={item._id} value={item._id}>{item.name}</option>;
                })}
              </select>
            </div>
            <div className="form_group modal_form">
              <label className="login_label" htmlFor="tonirovka">
                Tanirovkasi
              </label>
              <select name="tonirovka"  onChange={inputHandler} className="input" id="tonirovka">
                <option value="yoq">Yoq</option>
                <option value="oldi orqa qilingan">Oldi orqa qilingan</option>
                <option value="2 ta yon tomoni qilingan">
                  2 ta yon tomoni qilingan
                </option>
                <option value="to'liq qilingan">To'liq qilingan</option>
              </select>
            </div>
          </div>
          <div className="d-flex">
            <FormGroup label="Motor" name="motor" inputHandler={inputHandler} />
            <FormGroup label="Year" name="year" inputHandler={inputHandler} />
          </div>
          <div className="d-flex">
            <FormGroup label="Color" name="color" inputHandler={inputHandler} />
            <FormGroup
              label="Distance"
              name="distance"
              inputHandler={inputHandler}
            />
          </div>
          <div className="d-flex">
            <FormGroup
              label="Gearbook"
              name="gearbok"
              inputHandler={inputHandler}
            />
            <FormGroup label="Narxi" name="price" inputHandler={inputHandler} />
          </div>
          <div className="d-flex">
            <div className="form_group modal_form">
              <p className="login_label">Rasm 360 ichki makon</p>
              <label className="input img-label" htmlFor="imgUrlInside">
                <FontAwesomeIcon className="camera_icon" icon={faCamera} />
                Yuklash
              </label>
              <input
                className="input_file"
                type="file"
                name="imgUrlInside"
                id="imgUrlInside"
                // onChange={fileHandler}
                // required
              />
            </div>
            <div className="form_group modal_form">
              <p className="login_label">Rasm 360 tashqi makon</p>
              <label className="input img-label" htmlFor="imgUrlAutside">
                <FontAwesomeIcon className="camera_icon" icon={faCamera} />
                Yuklash
              </label>
              <input
                className="input_file"
                type="file"
                name="imgUrlAutside"
                id="imgUrlAutside"
                // onChange={fileHandler}
                // required
              />
            </div>
          </div>
          <div className="d-flex">
            <div className="form_group modal_form">
              <label className="login_label" htmlFor="description">
                Description
              </label>
              <textarea
               onChange={inputHandler}
                rows={3}
                className="input textarea"
                type="text"
                name="description"
                id="description"
                placeholder="Kiriting"
                // onChange={inputHandler}
                // required
              />
            </div>
            <div className="form_group modal_form">
              <p className="login_label">Model turi uchun rasm</p>
              <label className="input img-label" htmlFor="imgUrl">
                <FontAwesomeIcon className="camera_icon" icon={faCamera} />
                Yuklash
              </label>
              <input
                className="input_file"
                type="file"
                name="imgUrl"
                id="imgUrl"
                // onChange={fileHandler}
                // required
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
