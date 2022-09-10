import "./style.css";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../../redux/reducers/category";
import { CarCard } from "../../components/carCard";
import { setCategoryId } from "../../redux/reducers/categoryId";

const Main = () => {
  const navigate = useNavigate();
  const categorys = useSelector((store) => store.categorys);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  const categoryHandler=(id,name)=>{
     dispatch(setCategoryId({id,name}));
     navigate('/models')
  }
  return (
    <div className="main_section">
      <div className="main_button_wrapper">
        <Link to={"/admin"} className="btn_primary">
          <FontAwesomeIcon className="pr-5" icon={faUser} />
          Adminga o'tish
        </Link>
      </div>
      <div className="navigation_container">
        <Link to={"/"} className="navigation_text">
          {"Bosh sahifa > modellari"}
        </Link>
      </div>
      <div className="models_container">
        <h2>Modellari</h2>
        <div className="models_wrapper">
          {categorys?.categorys.map((item) => {
            return <CarCard key={item._id} categoryHandler={categoryHandler} model={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
