import React, { useContext } from "react";
import PropTypes from "prop-types";
import Header from "components/Header/Header";
import Show from "components/Show/Show";
import { SpotifyContext } from "Context/SpotifyContext";
import "./Home.scss";

const Home = (props) => {
  const [{ user }, dispatch] = useContext(SpotifyContext);
  return (
    <div className="home">
      <Header display_name={user?.display_name} url={user?.images[0].url} />
      <Show url={user?.images[0].url} />
    </div>
  );
};

Home.propTypes = {};

export default Home;
