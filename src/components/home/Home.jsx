import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import art1 from "../../assets/art1.jpg";
import art2 from "../../assets/alidaniels.jpg";
import art3 from "../../assets/art3.jpg";
import art4 from "../../assets/supportartists.png";
import topology from "../../assets/topology.svg";
import sideImage from "../../assets/side-image.png";
import sideTopology from "../../assets/side-topology.svg";
import looper from "../../assets/looper.svg";
import Team from "./Team";
import Modal from "../modal/Modal";
import Artists from "./Artists";
import Mint from "./Mint";
import Support from "./Support";

const Home = () => {
  const [data, setData] = useState(null);

  return (
    <Layout>
      <div className="home-wrapper">
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
                5,000 randomly generated paintings, visual art, and photography
                of various rarity.
              </p>
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

      <div id="get-your-art" className="get-your-art">
        <img className="side-topology" src={sideTopology} alt="side-topology" />
        <img className="looper" src={looper} alt="looper" />
        <div className="container-80">
          <Mint />
        </div>
      </div>

      <div id="meet-the-artists" className="meet-the-artists">
        <img className="side-image" src={sideImage} alt="side" />
        <div className="container-80">
          <Artists setData={setData} />
        </div>
      </div>

      {/* <div id="causes-we-support" className="causes-we-support">
        <img className="side-topology" src={sideTopology} alt="side-topology" />
        <img className="looper" src={looper} alt="looper" />
        <div className="container-80">
          <Support />
        </div>
      </div> */}

      <div id="our-team" className="our-team">
        <div className="container-80">
          <Team />
        </div>
      </div>

      <div id="causes-we-support" className="causes-we-support">
        <div className="container-80">
          <Support />
        </div>
      </div>
      <Modal data={data} />
    </Layout>
  );
};

export default Home;
