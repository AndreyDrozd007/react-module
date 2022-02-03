import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import LinkTab from "components/LinkTab/LinkTab";
import { ROUTES } from "config/constants";

const MainMenu = () => {
  const [tab, setTab] = useState(0);
  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  const TabComponents = ROUTES[1].map(
    ({ element, id, pathname, label}, tab) => (
      <LinkTab
        element={element}
        key={id}
        pathname={pathname}
        label={label}
        tab={tab}
      />
    )
  );

  return (
    <div>
      <Tabs variant="fullWidth" value={tab} onChange={handleChange}>
        {TabComponents}
      </Tabs>
    </div>
  );
};

export default MainMenu;
