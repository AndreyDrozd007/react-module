import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import LinkTab from "components/LinkTab/LinkTab";
import { NOTES, SHARED_NOTES, ABOUT } from "config/constants";

const MainMenu = () => {
  const [tab, setTab] = useState(0);
  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  const TABS = [
    { pathname: NOTES, element: <Tab />, label: "My Notes", id: 0 },
    { pathname: SHARED_NOTES, element: <Tab />, label: "Shared Notes", id: 1 },
    { pathname: ABOUT, element: <Tab />, label: "About", id: 2 },
  ];

  return (
    <div>
      <Tabs variant="fullWidth" value={tab} onChange={handleChange}>
        {TABS.map(({ element, id, pathname, label }, tab) => (
          <LinkTab
            element={element}
            key={id}
            pathname={pathname}
            label={label}
            tab={tab}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default MainMenu;
