import React from "react";
import LinkTab from "components/LinkTab/LinkTab";

const NotFound = () => (
  <>
    <h1>404 - Page not found</h1>
    <div>
      <LinkTab
        label="Go back the main Page"
        pathname="/notes"
        />
    </div>
  </>
);

export default NotFound;
