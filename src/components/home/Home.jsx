import React, { useState } from "react";
import { Link } from "react-router-dom";
import art2 from "../../assets/alidaniels.jpg";
import art1 from "../../assets/art1.jpg";
import art3 from "../../assets/art3.jpg";
import art4 from "../../assets/supportartists.png";
import topology from "../../assets/topology.svg";
import Layout from "../../layouts/Layout";
import MintModal from "../modal/MintModal";
import Modal from "../modal/Modal";
import Artists from "./Artists";
import FAQs from "./FAQs";
import Support from "./Support";
import Team from "./Team";

const Home = () => {
  const [data, setData] = useState(null);

  return (
    <Layout>
      <div className="home-wrapper">
        <div className="home">
          <div className="home-overlay"></div>
          <div className="container-80">
            {/* left */}
            <div className="hero">
              <h1 className="heading-text">CryptoHeart</h1>
              <h2 className="heading-text-2">See the able, not the label</h2>

              <p>
                A platform for artists with disabilities. Our mission is to
                advance the inclusion of artists with disabilities in the
                metaverse.
              </p>

              <p>
                5,000 randomly generated paintings, visual art, and photography
                of various rarity.
              </p>

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
              >
                <div className="mint-button-container">
                  <div>
                    <div className="mint-button">Mint</div>
                  </div>
                </div>
              </Link>
            </div>

            {/* right */}
            <div className="art-container">
              <div>
                <img src={art2} alt="art" />
                <img src={art1} alt="art" />
              </div>
              <div>
                <img src={art3} alt="art" />
                <img src={art4} alt="art" />
              </div>
            </div>
          </div>
        </div>
        <img className="topology" src={topology} alt="topology" />
      </div>

      <div id="meet-the-artists" className="meet-the-artists">
        {/* <img className="side-image" src={sideImage} alt="side" /> */}
        <div className="container-80">
          <Artists setData={setData} />
        </div>
      </div>

      {/* <div id="get-your-art" className="get-your-art">
        <img className="side-topology" src={sideTopology} alt="side-topology" />
        <img className="looper" src={looper} alt="looper" />
        <div className="container-80">
          <Mint />
        </div>
      </div> */}

      {/* <div id="causes-we-support" className="causes-we-support">
        <img className="side-topology" src={sideTopology} alt="side-topology" />
        <img className="looper" src={looper} alt="looper" />
        <div className="container-80">
          <Support />
        </div>
      </div> */}

      <div id="causes-we-support" className="causes-we-support">
        <div className="container-80">
          <Support />
        </div>
      </div>

      <div id="our-team" className="our-team">
        <div className="container-80">
          <Team />
        </div>
      </div>

      <div id="faqs" className="faqs">
        <div className="container-80">
          <FAQs />
        </div>
      </div>

      <Modal data={data} />
      <MintModal data={data} />
    </Layout>
  );
};

export default Home;
