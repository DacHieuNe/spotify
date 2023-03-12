import React, { useContext } from "react";
import { SpotifyContext } from "Context/SpotifyContext";
import PropTypes from "prop-types";
import Sidebar from "components/Sidebar/Sidebar";
import Body from "components/Body/Body";
import Footer from "components/Footer/Footer";
import "./Player.scss";

const Player = (props) => {
  const [state, dispatch] = useContext(SpotifyContext);

  return (
    <div className="player">
      <div className="player__layout">
        <Sidebar />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

Player.propTypes = {};

export default Player;
