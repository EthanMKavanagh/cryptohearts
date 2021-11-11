import React from "react";
import Layout from "./Layout";
import Logo from "../assets/cryptoheart.png";

const ArrowIcon = () => (
  <svg
    width="17"
    height="9"
    viewBox="0 0 17 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.7384 5.47252H0.430054V3.41086H10.7384V0.318359L16.9234 4.44169L10.7384 8.56502V5.47252Z"
      fill="white"
    />
  </svg>
);

const DividerIcon = () => (
  <svg
    width="1260"
    height="2"
    viewBox="0 0 1260 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.610718"
      y="0.798096"
      width="1258.78"
      height="1.12391"
      fill="#E6E8EC"
    />
  </svg>
);

const Footer = () => {
  return (
    <Layout light>
      <div className="footer">
        <div className="container-80">
          <div className="brand">
            <div className="brand__logo">
              <img src={Logo} alt="logo" />
              <p>Crypto Heart</p>
            </div>
            <h4>Helping Artists with Disabilities in the NFT Space.</h4>
          </div>
        </div>

        <div className="container-80 divider">
          <DividerIcon />
        </div>

        <div className="container-80">
          <div className="footer-copyright">
            <p className="copyright-text">
              Copyright © 2021 Crypto Hearts™. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Footer;
