import React from "react";
import placeholder from "../../assets/placeholder.png";

const Mint = () => {
  return (
    <>
      <h1>Mint</h1>
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
              <h3>Tier 1</h3>
              <span className="secondary-text">1 CryptoHeart Artwork</span>
              <span className="secondary-text">0.10 ETH</span>
              <span className="secondary-text">.10 per Artwork</span>
              <span className="secondary-text">
                Choice to Redeem Physical Work
              </span>
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
              <h3>Tier 2</h3>
              <span className="secondary-text">3 CryptoHeart Artworks</span>
              <span className="secondary-text">0.27 ETH</span>
              <span className="secondary-text">.09 per Artwork</span>
              <span className="secondary-text">
                Choice to Redeem Physical Work
              </span>
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
              <h3>Tier 3</h3>
              <span className="secondary-text">5 CryptoHeart Artworks</span>
              <span className="secondary-text">0.35 ETH</span>
              <span className="secondary-text">.07 per Artwork</span>
              <span className="secondary-text">
                Choice to Redeem Physical Work
              </span>
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
