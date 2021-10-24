import React from "react";
import Layout from "../../layouts/Layout";
import ConnectWallet from "../ConnectWallet";

const Pride = () => {
  return (
    <Layout>
      <div className="roadmap">
        <div className="container-80">
          <h1 className="mb-50">Sol Lions Members Only Community</h1>
          <h2 className="mb-50">Coming Soon!</h2>
          <p className="mb-20">
            To enter the Pride, connect your Solana wallet.
          </p>
          <ConnectWallet />
        </div>
      </div>
    </Layout>
  );
};

export default Pride;
