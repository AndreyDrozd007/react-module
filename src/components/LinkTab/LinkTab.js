import React from "react";
import { Link } from "react-router-dom";
import Tab from "@mui/material/Tab";

const LinkTab = (props) => (
  <Tab component={Link} to={props.pathname} {...props} />
);
export default LinkTab;
