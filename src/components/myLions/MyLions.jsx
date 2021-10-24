import React from "react";
import Layout from "../../layouts/Layout";
import ConnectWallet from "../ConnectWallet";

const MyLions = () => {
  return (
    <Layout>
      <div className="roadmap">
        <div className="container-80">
          <h1 className="mb-20">My Sol Lions</h1>
          <p className="mb-20">
            To view your Sol Lions, connect your Solana wallet.
          </p>
          <ConnectWallet />
        </div>
      </div>
    </Layout>
  );
};

export default MyLions;
