import React from "react";
import Layout from "../../layouts/Layout";
import Artists from "./Artists";
import art1 from "../../assets/art1.png";
import art2 from "../../assets/art2.png";
import art3 from "../../assets/art3.png";
import art4 from "../../assets/art4.png";
import Support from "./Support";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="container-80">
          {/* left */}
          <div className="hero">
            <h1 className="transparent-text">Crypto Heart</h1>
            <h2 className="heading-text">Crypto Heart</h2>
            <h2 className="heading-text-2">See the Able, Not the Label</h2>

            <p>
              A platform for artists with disabilities. Our mission is to
              advance the inclusion of artists with disabilities in the
              metaverse.
            </p>

            <p>
              1,000 randomly generated paintings, visual art, and photography of
              various rarity.
            </p>

            <div className="mint-button-container">
              <div>
                <div className="mint-button">Mint</div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="art-container">
            <div>
              <img src={art1} />
              <img src={art2} />
            </div>
            <div>
              <img src={art3} />
              <img src={art4} />
            </div>
          </div>
        </div>
      </div>

      <div id="meet-the-artists" className="meet-the-artists">
        <div className="container-80">
          <Artists />
        </div>
      </div>

      <div id="causes-we-support" className="causes-we-support">
        <div className="container-80">
          <Support />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
