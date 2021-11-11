import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ConnectWallet from "../components/ConnectWallet";
import twitter from "../assets/twitter.svg";
import discord from "../assets/discord.svg";

const DividerIcon = () => (
  <svg
    width="4"
    height="40"
    viewBox="0 0 2 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="hide-xs"
    style={{ marginLeft: 15 }}
  >
    <rect width="2" height="40" rx="1" fill="#E6E8EC" />
  </svg>
);

const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const openModal = () => {
    const modal = document.getElementById("modal-btn");
    modal.checked = true;
  };

  const hideNav = (e) => {
    console.log(e.target.classList[0]);
    if (
      e.target.classList[0] === "nav__link" ||
      e.target.classList[0] === "navbar-dropdown__item" ||
      e.target.classList[0] === "navbar-link"
    ) {
      const nav = document.getElementById("nav-toggle");
      nav.checked = false;
    }
  };

  useEffect(() => {
    const onScroll = (e) => {
      const navHeight = 90; // 50 + (20 + 20 margin)
      const scrolled = e.target.documentElement.scrollTop;

      if (scrollTop === 0) {
        setScrollTop(scrolled);
        return;
      }

      const navbar = document.querySelector(".navbar-placeholder");

      if (scrolled > navHeight) {
        navbar?.classList.add("animate");
      } else {
        navbar?.classList.remove("animate");
      }

      if (scrolled > scrollTop) {
        navbar.classList.remove("sticky");
      } else {
        navbar.classList.add("sticky");
      }

      setScrollTop(scrolled);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {/* <img alt="logo" className="navbar__logo" src={Logo} /> */}
          <span className="navbar__logo">Crypto Heart</span>
        </Link>

        <DividerIcon />

        <nav className="navbar-menu w-auto">
          <div className="navbar-item">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="navbar-link"
            >
              Discover
            </Link>
          </div>
          <div className="navbar-item">
            <Link
              to="#get-your-art"
              onClick={() => {
                const element = document.getElementById("get-your-art");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 120,
                    behavior: "smooth",
                  });
                }
              }}
              className="navbar-link"
            >
              Mint
            </Link>
          </div>
          <div className="navbar-item">
            <Link
              to="#meet-the-artists"
              onClick={() => {
                const element = document.getElementById("meet-the-artists");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 120,
                    behavior: "smooth",
                  });
                }
              }}
              className="navbar-link"
            >
              Meet the Artists
            </Link>
          </div>
          <div className="navbar-item">
            <Link
              to="#our-team"
              onClick={() => {
                const element = document.getElementById("our-team");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 120,
                    behavior: "smooth",
                  });
                }
              }}
              className="navbar-link"
            >
              Our Team
            </Link>
          </div>
          <div className="navbar-item">
            <Link
              to="#causes-we-support"
              onClick={() => {
                const element = document.getElementById("causes-we-support");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 90,
                    behavior: "smooth",
                  });
                }
              }}
              className="navbar-link"
            >
              Causes We Support
            </Link>
          </div>
        </nav>
      </div>

      <div className="connect-wallet hide-lg">
        <ConnectWallet />
      </div>

      <input
        type="checkbox"
        name=""
        id="nav-toggle"
        className="navbar__checkbox"
      />
      <label htmlFor="nav-toggle" className="navbar__button show-lg">
        <span className="navbar__icon">&nbsp;</span>
      </label>
      <div className="navbar__overlay show-lg">
        <nav onClick={hideNav} className="nav">
          <div className="navbar-item">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="navbar-link"
            >
              Discover
            </Link>
          </div>
          <div className="navbar-item">
            <Link
              to="#meet-the-artists"
              onClick={() => {
                const element = document.getElementById("meet-the-artists");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 120,
                    behavior: "smooth",
                  });
                }
              }}
              className="navbar-link"
            >
              Meet the Artists
            </Link>
          </div>
          <div className="navbar-item">
            <Link
              to="#causes-we-support"
              onClick={() => {
                const element = document.getElementById("causes-we-support");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
              className="navbar-link"
            >
              Causes We Support
            </Link>
          </div>

          <div className="divider--white" />

          <div>
            <div onClick={() => window.open("https://discord.gg/cbjE75n9")}>
              <img className="discord" src={discord} alt="discord" />
            </div>
            <div
              onClick={() => window.open("https://twitter.com/CryptoHeart88")}
            >
              <img className="twitter" src={twitter} alt="twitter" />
            </div>
          </div>

          <div onClick={() => openModal()} className="nav__link">
            Connect Wallet
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
