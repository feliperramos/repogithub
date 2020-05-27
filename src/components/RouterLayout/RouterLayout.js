import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Create a layout Component to receive the others components in Router Store
 *
 * @param {*} props
 */

const RouterLayout = (props) => {
  const { component: Component, ...rest } = props;

  return (
    <Route {...rest} render={(matchProps) => <Component {...matchProps} />} />
  );
};

/**
 * Define Requireds Nodes
 */

RouterLayout.propTypes = {
  component: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
};

export default RouterLayout;
