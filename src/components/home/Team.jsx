import React from "react";
import gbabyEth from "../../assets/gbaby.eth.png";
import roger from "../../assets/roger.png";
import richard from "../../assets/richard.png";
import defijesus from "../../assets/defijesus.png";
import dewey from "../../assets/dewey.png";
import kavy from "../../assets/kavy.png";
import garret from "../../assets/garrett.jpeg";

const Team = () => {
  return (
    <>
      <h1>Our Team</h1>

      <div className="lead">
        <div className="column">
          <img src={garret} alt="garret" />
        </div>

        <div className="column">
          <h2>Lead - Garrett Ackerman</h2>
          <a
            href="https://twitter.com/0xgbaby"
            target="_blank"
            rel="noopener noreferrer"
          >
            @0xgbaby
          </a>
          <p>
            IRL I help lead Rumi{" "}
            <a
              href="https://meetmyrumi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              (https://meetmyrumi.com)
            </a>{" "}
            which is a platform that helps individuals with disabilities live
            more independently & integrated in the community by connecting them
            with supportive roommates. At Rumi we see a lot of individuals who
            don’t feel included in society, both socially & economically. And as
            an NFT enthusiast who has collected Creatures, Pixel Vault, Curio
            Cards, MAYC, World of Women, etc, I have seen first hand how
            powerful the web3 community can be. I want Crypto Heart to help
            individuals with disabilities thrive & create community in the
            metaverse.
          </p>
        </div>
      </div>

      <div className="team">
        {/* <div className="member">
          <img src={gbabyEth} alt="gbabyEth" />
          <a
            href="https://twitter.com/0xgbaby"
            target="_blank"
            rel="noopener noreferrer"
          >
            @0xgbaby
          </a>
          <span>Lead - Gbaby.eth</span>
        </div> */}
        <div className="member">
          <img src={roger} alt="roger" />
          <a
            href="https://twitter.com/Huaso_Tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Huaso_Tech
          </a>
          <span>Community Manager - Roger</span>
        </div>
        <div className="member">
          <img src={richard} alt="richard" />
          <a
            href="https://twitter.com/metahero_5"
            target="_blank"
            rel="noopener noreferrer"
          >
            @metahero_5
          </a>
          <span>Strategy - Richard</span>
        </div>
        <div className="member">
          <img src={defijesus} alt="defijesus" />
          <a
            href="https://twitter.com/eldefijesus"
            target="_blank"
            rel="noopener noreferrer"
          >
            @eldefijesus
          </a>
          <span>Tech - Defijesus </span>
        </div>
        {/* <div className="member">
          <img src={dewey} alt="dewey" />
          <a
            href="https://twitter.com/0xDewey"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Dewey
          </a>
          <span>Tech - Dewey</span>
        </div> */}
        <div className="member">
          <img src={kavy} alt="kavy" />
          <a
            href="https://twitter.com/kavy05"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Kavy
          </a>
          <span>Tech - Kavy</span>
        </div>
      </div>
    </>
  );
};

export default Team;
