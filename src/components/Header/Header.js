import React from "react";
import { BsSearch } from "react-icons/bs";
import PropTypes from "prop-types";
import "./Header.scss";

const Header = ({ display_name, url }) => {
  return (
    <header>
      <div className="header">
        <div className="header__search">
          <button>
            <BsSearch />
          </button>
          <input type="text" placeholder="Search for Playlists" />
        </div>
        <div className="header__info">
          <img src={url} alt="header__image" />
          <span>{display_name}</span>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  display_name: PropTypes.string,
  url: PropTypes.string,
};

export default Header;
