import React, { useState } from "react";
import { Pannellum } from "pannellum-react";
import img360 from '../../images/360degree.svg';
import "./style.css";

export function Car360Degree({ car }) {
  const [ins, setIns] = useState(true);
  return (
    <div className="car360_degree">
      <h2 className="car360_degree_title">{car.marka.name}</h2>
      <Pannellum
        image={`${process.env.REACT_APP_BACKEND_URL}/${ins ? car.imgUrlAutside : car.imgUrlInside}`}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
        width="820px"
        height="444px"
      ></Pannellum>
      <div  className='degree360_svg'>
      <img src={img360} alt=""  />
      </div>
      <p className="car360_degree_text">
        Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin. Mashinaning
        rangi ushbu saytda taqdim etilganidan farq qilishi mumkin.
      </p>
      <div className="status">
        <input
          name="area"
          id="outsideCar"
          type="radio"
          onChange={() => setIns(!ins)}
          defaultChecked={ins}
        />
        <label htmlFor="outsideCar">Tashqi</label>
        <input
          name="area"
          id="insideCar"
          type="radio"
          onChange={() => setIns(!ins)}
          defaultChecked={!ins}
        />
        <label htmlFor="insideCar">Ichki makon</label>
      </div>
    </div>
  );
}