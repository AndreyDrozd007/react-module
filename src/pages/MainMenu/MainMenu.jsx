import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import LinkTab from "components/LinkTab/LinkTab";

const MainMenu = () => {
  const [tab, setTab] = useState(0);
  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <div>
      <Tabs variant="fullWidth" value={tab} onChange={handleChange}>
        <LinkTab label="My Notes" pathname="/notes" />
        <LinkTab
          label="Shared Notes"
          pathname="/shared-notes"
        />
        <LinkTab label="About" pathname="/about" />
      </Tabs>
    </div>
  );
};

export default MainMenu;
