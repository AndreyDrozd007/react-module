import React from "react";
import LinkTab from "components/LinkTab/LinkTab";
import AllyProps from "components/AllyProps/AllyProps";

const NotFound = () => (
  <>
    <h1>404 - Page not found</h1>
    <div>
      <LinkTab
        label="Go back the main Page"
        pathname="/notes"
        {...AllyProps(0)}
      />
    </div>
  </>
);

export default NotFound;
