import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import Create from "components/Create/Create";
import Home from "components/Home/Home";
import "./Body.scss";

const Body = (props) => {
  return (
    <div className="player__body">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={Create} />
      </Switch>
    </div>
  );
};

Body.propTypes = {};

export default Body;
