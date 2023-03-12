import React, { useContext, useState } from "react";
import { SpotifyContext } from "Context/SpotifyContext";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { FaTrash, FaEdit, FaSave } from "react-icons/fa";
import PropTypes from "prop-types";
import "./SpotifyIcon.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const SpotifyIcon = ({
  isEdit,
  editItem,
  setEditItem,
  id,
  item,
  title,
  icon,
  href,
}) => {
  const [{}, dispatch] = useContext(SpotifyContext);
  const [editTitle, setEditTitle] = useState(title);

  const handleDeleteItem = () => {
    console.log(1);
    dispatch({
      type: "DELETE_PLAYLIST_ITEM",
      payload: {
        id,
      },
    });
  };
  const handleEditItem = () => {
    if (isEdit && editItem.id == id) {
      dispatch({
        type: "EDIT_PLAYLIST_ITEM",
        payload: {
          id,
          title: editTitle,
        },
      });
      setEditItem({});
    } else {
      setEditItem(item);
      setEditTitle(title);
    }
  };
  const handleEditTitle = (e) => {
    setEditTitle(e.target.value);
  };
  return (
    <>
      {icon ? (
        <NavLink
          exact
          to={href}
          className="spotify__icon"
          activeClassName="spotify__icon--active"
        >
          <div className="spotify__entity">{icon}</div>
          <h3 className="spotify__title">{title}</h3>
        </NavLink>
      ) : (
        <div className="spotify__wrapper">
          <div className="spotify__icon">
            {!isEdit ? (
              <h3 className="spotify__title spotify__title--small">{title}</h3>
            ) : editItem.id == id ? (
              <Form.Control
                type="text"
                value={editTitle}
                onChange={(e) => handleEditTitle(e)}
              />
            ) : (
              <h3 className="spotify__title spotify__title--small">{title}</h3>
            )}
          </div>
          <button
            onClick={handleDeleteItem}
            className="spotify__btn"
            type="button"
          >
            {<FaTrash />}
            <span>Delete</span>
          </button>
          <button
            onClick={handleEditItem}
            className="spotify__btn"
            type="button"
          >
            {isEdit ? (
              editItem.id == id ? (
                <>
                  <FaSave />
                  <span>Save</span>
                </>
              ) : (
                <>
                  <FaEdit />
                  <span>Edit</span>
                </>
              )
            ) : (
              <>
                <FaEdit />
                <span>Edit</span>
              </>
            )}
          </button>
        </div>
      )}
    </>
  );
};

SpotifyIcon.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  href: PropTypes.string,
};
SpotifyIcon.defaultProps = {
  icon: "",
};

export default SpotifyIcon;
