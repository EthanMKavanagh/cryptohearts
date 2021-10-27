import React from "react";
import gbabyEth from "../../assets/gbaby.eth.png";
import roger from "../../assets/roger.png";
import richard from "../../assets/richard.png";
import defijesus from "../../assets/defijesus.png";
import dewey from "../../assets/dewey.png";
import kavy from "../../assets/kavy.png";

const Team = () => {
  return (
    <>
      <h1>Our Team</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard
      </p>
      <div className="team">
        <div className="member">
          <img src={gbabyEth} alt="gbabyEth" />
          <a
            href="https://twitter.com/0xgbaby"
            target="_blank"
            rel="noopener noreferrer"
          >
            @0xgbaby
          </a>
          <span>Lead - Gbaby.eth</span>
        </div>
        <div className="member">
          <img src={roger} alt="roger" />
          <a
            href="https://twitter.com/Huaso_Tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            Huaso_Tech
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
            metahero_5
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
            eldefijesus
          </a>
          <span>Tech - Defijesus </span>
        </div>
        <div className="member">
          <img src={dewey} alt="dewey" />
          <a
            href="https://twitter.com/0xDewey"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dewey
          </a>
          <span>Strategy - Dewey</span>
        </div>
        <div className="member">
          <img src={kavy} alt="kavy" />
          <a
            href="https://twitter.com/kavy05"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kavy
          </a>
          <span>Strategy - Kavy</span>
        </div>
      </div>
    </>
  );
};

export default Team;
