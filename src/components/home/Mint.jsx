import React from "react";
import placeholder from "../../assets/placeholder.png";

const Mint = () => {
  return (
    <>
      {/* <p>0/10,000 pieces remaining</p> */}

      <div className="mints-options">
        <div className="mints">
          <div className="transparent-layer">
            <div className="mint-content">
              {/* <img
                src={placeholder}
                alt="placeholder1"
                className="placeholder-img"
              /> */}
              <h3>Single</h3>
              <span className="secondary-text">1 Crypto Heart Artwork</span>
              <span className="secondary-text">0.10 ETH</span>
              <span className="secondary-text">.10 per Artwork</span>
            </div>

            <div className="mint-button-container">
              <div>
                <div className="mint-button">Mint</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mints">
          <div className="transparent-layer">
            <div className="mint-content">
              <h3>A Taste</h3>
              <span className="secondary-text">3 Crypto Heart Artworks</span>
              <span className="secondary-text">0.27 ETH</span>
              <span className="secondary-text">.09 per Artwork</span>
            </div>

            <div className="mint-button-container">
              <div>
                <div className="mint-button">Mint</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mints">
          <div className="transparent-layer">
            <div className="mint-content">
              <h3>Bit Of Everything</h3>
              <span className="secondary-text">5 Crypto Heart Artworks</span>
              <span className="secondary-text">0.35 ETH</span>
              <span className="secondary-text">.07 per Artwork</span>
            </div>

            <div className="mint-button-container">
              <div>
                <div className="mint-button">Mint</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mint;
