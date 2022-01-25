import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const MainMenu = () => (
  <>
    <Button variant="contained">
      <Link to={"/notes"}>My notes</Link>
    </Button>
    <Button variant="contained">
      <Link to={"/shared-notes"}>Shared notes</Link>
    </Button>
    <Button variant="contained">
      <Link to={"/about"}>About</Link>
    </Button>
  </>
);

export default MainMenu;
