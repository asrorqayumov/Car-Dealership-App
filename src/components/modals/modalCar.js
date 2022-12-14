import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { CreateCar, FileUpload } from "../../api/requests";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "./../../redux/reducers/category";
import { FormGroup } from "../formGroup";
import { Alert } from "../../utils/SweetAlert";
import Select from "react-select";
import "./style.css";
Modal.setAppElement("#root");

export const ModalCar = ({ isOpen, setOpen }) => {
  const [car, setCar] = useState({
    price: "",
    year: "",
    description: "",
    tonirovka: "",
    motor: "",
    color: "",
    distance: "",
    gearbok: "",
  });
  const [imgUrl, setImgUrl] = useState("");
  const [imgUrlInside, setImgUrlInside] = useState("");
  const [imgUrlAutside, setImgUrlAutside] = useState("");
  const [categoryId, setCategoyId] = useState("");
  const [optionsModel, setOptionsModel] = useState([{ value: "", label: "" }]);
  const [files, setFiles] = useState({
    imgUrl: null,
    imgUrlInside: null,
    imgUrlAutside: null,
  });
  const categorys = useSelector((store) => store.categorys.categorys);
  console.log(categorys);
  const dispatch = useDispatch();

  const imgUrlFormData = new FormData();
  const imgUrlInsideFormData = new FormData();
  const imgUrlAutsideFormData = new FormData();
  
  useEffect(()=>{
    dispatch(getCategory(50))
    if (categorys)
    setOptionsModel(
      categorys.map(item => ({
        value: item._id,
        label: item.name,
      })),
    );
  },[]);

  useEffect(() => {
    if (imgUrlAutside && car.price) {
      CreateCar({ ...car, categoryId,imgUrl, imgUrlInside, imgUrlAutside })
        .then((res) => {
          Alert("success", "Car created successfully");
          setOpen(false);
          setCar(null);
          setImgUrl("");
          setImgUrlAutside("");
          setImgUrlInside("");
        })
        .catch((err) => Alert("success", err));
    }
  }, [imgUrlAutside,]);

  const inputHandler = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
    if (e.target.name == "price" || e.target.name == "year") {
      setCar({ ...car, [e.target.name]: +e.target.value });
    }
  };

  const onFileUpload = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  function addFormData() {
    imgUrlInsideFormData.append("file", files.imgUrlInside);
    imgUrlAutsideFormData.append("file", files.imgUrlAutside);
    imgUrlFormData.append("file", files.imgUrl);
    setFiles("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    addFormData();
    try {
      FileUpload(imgUrlFormData).then((res) => setImgUrl(res.data.data));
      FileUpload(imgUrlInsideFormData).then((res) =>
        setImgUrlInside(res.data.data)
      );
      FileUpload(imgUrlAutsideFormData).then((res) =>
        setImgUrlAutside(res.data.data)
      );
    } catch (e) {
      Alert("error", e.message);
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
        <form className="form_modal" onSubmit={handleSubmit}>
          <div className="d-flex">
            <div className="form_group modal_form">
              <label className="login_label" htmlFor="categoryId">
                Markasi
              </label>
              <Select
                options={optionsModel}
                onChange={e => setCategoyId(e.value)}
      
              >
              </Select>
            </div>
            <div className="form_group modal_form">
              <label className="login_label" htmlFor="tonirovka">
                Tanirovkasi
              </label>
              <input
                name="tonirovka"
                onChange={inputHandler}
                className="input"
                id="tonirovka"
                placeholder="Kiriting"
              >
              </input>
            </div>
          </div>
          <div className="d-flex">
            <FormGroup
              label="Motor"
              value={car?.motor}
              name="motor"
              inputHandler={inputHandler}
            />
            <FormGroup
              label="Year"
              value={car?.year}
              name="year"
              type="number"
              className="number_input"
              inputHandler={inputHandler}
            />
          </div>
          <div className="d-flex">
            <FormGroup
              label="Color"
              value={car?.color}
              name="color"
              inputHandler={inputHandler}
            />
            <FormGroup
              label="Distance"
              name="distance"
              inputHandler={inputHandler}
              value={car?.distance}
            />
          </div>
          <div className="d-flex">
            <FormGroup
              label="Gearbook"
              name="gearbok"
              inputHandler={inputHandler}
              value={car?.gearbok}
            />
            <FormGroup
              label="Narxi"
              value={car?.price}
              type="number"
              className="number_input"
              name="price"
              inputHandler={inputHandler}
            />
          </div>
          <div className="d-flex">
            <div className="form_group modal_form">
              <label className="login_label" htmlFor="imgUrlInside">
                Rasm 360 ichki makon
              </label>
              <input
                className="input input_file"
                type="file"
                name="imgUrlInside"
                id="imgUrlInside"
                onChange={onFileUpload}
                required
              />
            </div>
            <div className="form_group modal_form">
              <label className="login_label" htmlFor="imgUrlAutside">
                Rasm 360 tashqi makon
              </label>
              <input
                className="input input_file"
                type="file"
                name="imgUrlAutside"
                id="imgUrlAutside"
                onChange={onFileUpload}
                required
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
                defaultChecked={car?.description}
                required
              />
            </div>
            <div className="form_group modal_form">
              <label className="login_label" htmlFor="imgUrl">
                Model turi uchun rasm
              </label>
              <input
                className="input input_file"
                type="file"
                name="imgUrl"
                id="imgUrl"
                onChange={onFileUpload}
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
