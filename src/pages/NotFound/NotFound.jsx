import React from "react";
import Tab from "@mui/material/Tab";

import LinkTab from "components/LinkTab/LinkTab";
import { ROUTES } from "config/constants";

const NotFound = () => {
  const GoBackTab = {
    pathname: ROUTES.NOTES,
    element: <Tab />,
    label: "Go back the main Page",
  };

  return (
    <>
      <h1>404 - Page not found</h1>
      <div>
        <LinkTab
          element={GoBackTab.element}
          key={GoBackTab.id}
          pathname={GoBackTab.pathname}
          label={GoBackTab.label}
        />
      </div>
    </>
  );
};

export default NotFound;
