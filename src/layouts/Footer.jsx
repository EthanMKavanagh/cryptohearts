import React from "react";
import Layout from "./Layout";
import Logo from "../logo.svg";
import discordLogo from "../assets/discord.svg";
import twitterLogo from "../assets/twitter.svg";

const Footer = () => {
  return (
    <Layout light>
      <div className="footer">
        <div className="container-80">
          <div>
            <img src={Logo} alt="logo" />
            <p className="mt-10">
              8,888 cute and collectible Lions with proof of ownership stored on
              the Solana blockchain.
            </p>
          </div>
          <div className="footer-buttons">
            <a
              className="button mt-10"
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterLogo} alt="twitter" />
              Join our Discord
            </a>
            <a
              className="button mt-10"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={discordLogo} alt="discord" />
              Follow us on Twitter
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Footer;
