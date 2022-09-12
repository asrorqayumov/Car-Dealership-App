import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHomeAlt,
  faStore,
  faNotesMedical,
} from "@fortawesome/free-solid-svg-icons";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar_list">
        <li className="sidebar_list_item first">
          <FontAwesomeIcon className="sidebar_icon" icon={faHomeAlt} />
          Asosiy
        </li>
        <li className="sidebar_list_item">
          <FontAwesomeIcon className="sidebar_icon" icon={faStore} />
          E'lonlar
        </li>
        <li className="sidebar_list_item">
          <FontAwesomeIcon className="sidebar_icon" icon={faNotesMedical} />
          Savollar
        </li>
      </ul>
    </div>
  );
};
