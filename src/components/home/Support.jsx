import React from "react";
import VerificationIcon from "../../assets/VerificationIcon.svg";

const LineIcon = () => (
  <svg
    width="47"
    height="3"
    viewBox="0 0 47 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="46.811"
      y1="1.71826"
      x2="0.0785751"
      y2="1.71826"
      stroke="#F5842F"
      stroke-width="2"
    />
  </svg>
);

const Support = () => {
  return (
    <>
      <h1>Causes We Support</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A laoreet risus
        sit interdum. Hendrerit dignissim faucibus lacus, eget suspendisse.
        Libero, ac iaculis pellentesque at nunc ultricies egestas dui. Aliquam
        sit non sagittis lorem.
      </p>

      <div className="supports">
        <div className="support">
          <div className="transparent-layer">
            <img src={VerificationIcon} alt="verification-icon" />
            <span className="heading">She's the first</span>
            <LineIcon />
            <span className="secondary-text">
              She’s the First funds and supports local solutions to educate and
              empower girls across the world.
            </span>
          </div>
        </div>
        <div className="support">
          <div className="transparent-layer">
            <img src={VerificationIcon} alt="verification-icon" />
            <span className="heading">Too young to wed</span>
            <LineIcon />
            <span className="secondary-text">
              Too Young to Wed fights against the barbaric practise that is
              child marriage.
            </span>
          </div>
        </div>
        <div className="support">
          <div className="transparent-layer">
            <img src={VerificationIcon} alt="verification-icon" />
            <span className="heading">Strange cintia</span>
            <LineIcon />
            <span className="secondary-text">
              Strange Cintia is a member of our community and needs our help to
              fight her disease: severe ME/CFS.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
