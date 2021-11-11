import React from "react";
import visual1 from "../../assets/marrie1.jpg";
import visual2 from "../../assets/marrie2.png";
import visual3 from "../../assets/marrie3.JPG";

const Support = ({ data }) => {
  return data ? (
    <>
      <div className="left">
        <h2 className="heading">
          {data.name} <br />
        </h2>

        {data.bio.map((text) => (
          <p className="bio-text">{text}</p>
        ))}
      </div>
      <div className="right">
        <div className="image-container left-indent">
          <img src={data.visual2} alt="visual" />
          <div className="image-text">
            <span>Visual Complexity</span>
          </div>
        </div>

        <div className="image-container right-indent">
          <img src={data.visual3} alt="visual" />
          <div className="image-text">
            <span>Visual Complexity</span>
          </div>
        </div>

        <div className="image-container left-indent">
          <img src={data.visual1} alt="visual" />
          <div className="image-text">
            <span>Visual Complexity</span>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="left">
        <h1 className="heading">Causes We Support</h1>

        <div className="image-container left-indent left-column">
          <div className="left-column">
            <img src={visual2} alt="visual" />
            <div className="image-text">
              <span>Art Studio</span>
              <span>
                Crypto Heart IRL studio for individuals with disabilities to
                connect & create.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="image-container left-indent">
          <img src={visual1} alt="visual" />
          <div className="image-text">
            <span>Artists with Disabilities</span>
            <span>
              New or Established Artists with disabilities. Artists like Jeremy
              create pieces for museums, large organizations, and nonprofits.
              New Artists that need some love! Marrie is a longtime artist who
              has cerebral palsy.
            </span>
          </div>
        </div>
        <div className="image-container right-indent">
          <img src={visual3} alt="visual" />
          <div className="image-text">
            <span>Rumi</span>
            <span>
              Rumi helps individuals with disabilities live independently by
              connecting them to supportive roommates.
              <a
                href="https://meetmyrumi.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                (https://meetmyrumi.com)
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
