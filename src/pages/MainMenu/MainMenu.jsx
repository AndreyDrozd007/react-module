import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import LinkTab from "components/LinkTab/LinkTab";
import AllyProps from "components/AllyProps/AllyProps";

const MainMenu = () => {
  const [tab, setTab] = useState(0);
  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <div>
      <Tabs variant="fullWidth" value={tab} onChange={handleChange}>
        <LinkTab label="My Notes" pathname="/notes" {...AllyProps(0)} />
        <LinkTab
          label="Shared Notes"
          pathname="/shared-notes"
          {...AllyProps(1)}
        />
        <LinkTab label="About" pathname="/about" {...AllyProps(2)} />
      </Tabs>
    </div>
  );
};

export default MainMenu;
