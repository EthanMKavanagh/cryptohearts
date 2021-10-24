import React from "react";
import phantomLogo from "../../assets/phantom.svg";
import discordLogo from "../../assets/discord.svg";
import twitterLogo from "../../assets/twitter.svg";

const Modal = () => {
  const closeModal = (e) => {
    if (e.target.classList[0] === "modal") {
      const modal = document.getElementById("modal-btn");
      modal.checked = false;
    }
  };

  return (
    <div className="section">
      <input
        className="modal-btn"
        type="checkbox"
        id="modal-btn"
        name="modal-btn"
      />
      <div onClick={closeModal} className="modal">
        <div className="modal-wrap">
          <h2 className="mb-20">Connect your wallet</h2>
          <p className="mb-10">Please use Phantom Wallet mint your Lions.</p>
          <button className="button mb-30">
            <img src={phantomLogo} alt="phantom" />
            Phantom
          </button>

          <h3 className="mb-10">Need Help?</h3>
          <p className="mb-10">
            Visit our FAQs for more info or get in touch with us on Discord or
            Twitter.
          </p>

          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={discordLogo} alt="discord" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="ml-10" src={twitterLogo} alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
