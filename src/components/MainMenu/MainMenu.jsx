import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";

import LinkTab from "components/LinkTab/LinkTab";
import { ROUTES } from "config/constants";

const MainMenu = () => {
  const [tab, setTab] = useState(0);
  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <div>
      <Tabs variant="fullWidth" value={tab} onChange={handleChange}>
        <LinkTab pathname={ROUTES.NOTES} label="My Notes" />
        <LinkTab pathname={ROUTES.SHARED_NOTES} label="Shared Notes" />
        <LinkTab pathname={ROUTES.ABOUT} label="About" />
      </Tabs>
    </div>
  );
};

export default MainMenu;
