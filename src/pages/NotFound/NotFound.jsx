import React from "react";
import LinkTab from "components/LinkTab/LinkTab";
import { ROUTES } from "config/constants";

const NotFound = () => {
  const GoBackTab = ROUTES[2].map(({ element, id, pathname, label }, tab) => (
    <LinkTab
      element={element}
      key={id}
      pathname={pathname}
      label={label}
      tab={tab}
    />
  ));

  return (
    <>
      <h1>404 - Page not found</h1>
      <div>
        {GoBackTab}
      </div>
    </>
  );
};

export default NotFound;
