import React from "react";
import { Route } from "react-router-dom";
import { Helmet } from "react-helmet";

const Page = ({ title, ...rest }) => {
  return (
    <>
      <Helmet>
        <title>{title || "NFT"}</title>
      </Helmet>
      <Route {...rest} />
    </>
  );
};

export default Page;
