import React from "react";
import PropTypes from "prop-types";
import "./SongRow.scss";

const SongRow = ({ images, name, author }) => {
  return (
    <div className="song-row">
      <div className="song-row__image">
        <img src={images} alt="song-row__image" />
      </div>
      <div className="song-row__introduce">
        <h2>{name}</h2>
        <p>
          {author.map((item, index) => {
            if (index != author.length - 1) {
              return <>{item.name} -</>;
            } else {
              return <>{item.name}</>;
            }
          })}
        </p>
      </div>
    </div>
  );
};

SongRow.propTypes = {};

export default SongRow;
