import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faBell} from "@fortawesome/free-solid-svg-icons";
import avatar from '../../images/Avatar.png'
export const Navbar = () => {
  return (
    <nav>
      <Link to={"/"} className="btn_primary nav_btn">
        <FontAwesomeIcon className="pr-5" icon={faUser} />
        Asosiyga qaytish
      </Link>
      <div className="nav_right_side">
        <span className="icon_before"></span>
         <FontAwesomeIcon className="icon_bell" icon={faBell} />
         <img src={avatar} alt="avatar" className="avatar" />
      </div>
    </nav>
  );
};
