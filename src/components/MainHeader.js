import React from "react";
import Logotype from "./Logotype";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Logotype></Logotype>
      </div>
      <div className="header__container">
        <Link to="/HomePage">
          <FontAwesomeIcon icon={faHome} className="header__icon" />
        </Link>
        <Link to="/LikePicture">
          <FontAwesomeIcon icon={faHeart} className="header__icon" />
        </Link>
        <Link to="/ProfilePage">
          <FontAwesomeIcon icon={faUser} className="header__icon" />
        </Link>
      </div>
    </div>
  );
};

export default MainHeader;
