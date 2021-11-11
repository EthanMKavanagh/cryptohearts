import React from "react";
import Store from "../home/Support";

const Modal = ({ data }) => {
  const closeModal = (e) => {
    if (e.target.classList[0] === "modal") {
      const modal = document.getElementById("modal-btn");
      modal.checked = false;
      document.body.style.overflow = "auto";
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
          <div className="causes-we-support">
            <div className="container-80">
              <Store data={data} />
            </div>
          </div>

          {/* <h2 className="mb-20">Connect your wallet</h2>
          <p className="mb-10">Please use Phantom Wallet mint.</p>
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
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
