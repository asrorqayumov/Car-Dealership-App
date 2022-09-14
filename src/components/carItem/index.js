import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faPen } from "@fortawesome/free-solid-svg-icons";

export const CarItem = ({index,editHandler,deleteHandler,car,car:{marka,gearbok,tonirovka,motor,year,color,distance,_id}}) => {
    
  return (
    <ul className="car_list">
      <li className="car_list_item">{index}</li>
      <li className="car_list_item">{marka?.name}</li>
      <li className="car_list_item">{gearbok}</li>
      <li className="car_list_item">{tonirovka} </li>
      <li className="car_list_item">{motor}</li>
      <li className="car_list_item">{year}</li>
      <li className="car_list_item">{color}</li>
      <li className="car_list_item">{distance}</li>
      <li className="car_list_item_last">
        <button className="btn_update delete" onClick={()=>deleteHandler(_id)}>
          <FontAwesomeIcon className="icon_update" icon={faTrash} />
        </button>
      </li>
      <li className="car_list_item_last">
        <button className="btn_update edit" onClick={()=>editHandler(car)}>
          <FontAwesomeIcon className="icon_update" icon={faPen} />
        </button>
      </li>
    </ul>
  );
};
