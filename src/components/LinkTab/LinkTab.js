import React from "react";
import { Link } from "react-router-dom";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

const LinkTab = ({ pathname, label, element, tab, onChange }) => (
  <Tab
    component={Link}
    to={pathname}
    label={label}
    element={element}
    value={tab}
    onChange={onChange}
  />
);

LinkTab.propTypes = {
  pathname: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  element: PropTypes.object.isRequired,
  tab: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LinkTab;
