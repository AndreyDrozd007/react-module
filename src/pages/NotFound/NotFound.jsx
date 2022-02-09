import React from "react";

import LinkTab from "components/LinkTab/LinkTab";
import { ROUTES } from "config/constants";

const NotFound = () => {

  return (
    <>
      <h1>404 - Page not found</h1>
      <div>
        <LinkTab
          pathname={ROUTES.NOTES}
          label="Go back the main Page"
        />
      </div>
    </>
  );
};

export default NotFound;
