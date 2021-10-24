import React from "react";

const Layout = ({ children, dark, light, full }) => {
  const className = `layout ${dark ? "layout__dark" : ""} ${
    light ? "layout__light" : ""
  } ${full && "layout__full"}`;

  return <div className={className}>{children}</div>;
};

export default Layout;
