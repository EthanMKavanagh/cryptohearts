import React from "react";
import visual1 from "../../assets/supportartists.png";
import visual2 from "../../assets/cryptoheart.png";
import visual3 from "../../assets/rumi.JPG";

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
            {/* <span>Visual Complexity</span> */}
          </div>
        </div>

        <div className="image-container right-indent">
          <img src={data.visual3} alt="visual" />
          <div className="image-text">
            {/* <span>Visual Complexity</span> */}
          </div>
        </div>

        <div className="image-container left-indent">
          <img src={data.visual1} alt="visual" />
          <div className="image-text">
            {/* <span>Visual Complexity</span> */}
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="left">
        <h2 className="heading">Our Mission</h2>

        <div className="image-container left-indent left-column">
          <div className="left-column">
            <img src={visual2} alt="visual" />
            <div className="image-text">
              <span>Art Studio</span>
              <span>
                We will launch an IRL studio in Southern California. It will be
                a supportive studio where individuals can go to create community
                with other artists, enhance their artistic ability, and
                represent their work in our gallery. We will provide all the
                supplies for artists.
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
              We want to work with established artists like Jeremy, who have
              sold work to museums, collectors, ect, and new artists like
              Marrie, who are looking to launch their artistic career.
            </span>
          </div>
        </div>
        <div className="image-container right-indent">
          <img
            src={visual3}
            alt="visual"
            onClick={() => window.open("https://meetmyrumi.com")}
            className="rumi"
          />
          <div className="image-text">
            <span>Rumi</span>
            <span>
              Rumi helps individuals with disabilities live more independently
              and integrated in the community by connecting them with supportive
              roommates. We want to support and bring more awareness to
              organizations that support the disability community.{" "}
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
