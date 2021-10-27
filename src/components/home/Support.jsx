import React from "react";
import VerificationIcon from "../../assets/VerificationIcon.svg";

// const LineIcon = () => (
//   <svg
//     width="47"
//     height="3"
//     viewBox="0 0 47 3"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <line
//       x1="46.811"
//       y1="1.71826"
//       x2="0.0785751"
//       y2="1.71826"
//       stroke="#F5842F"
//       stroke-width="2"
//     />
//   </svg>
// );

const Support = () => {
  return (
    <>
      <h1>Causes We Support</h1>
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A laoreet risus
        sit interdum. Hendrerit dignissim faucibus lacus, eget suspendisse.
        Libero, ac iaculis pellentesque at nunc ultricies egestas dui. Aliquam
        sit non sagittis lorem.
      </p> */}

      <div className="supports">
        <div className="support">
          <div className="transparent-layer">
            <img src={VerificationIcon} alt="verification-icon" />
            <span className="secondary-text">
              New or Established Artists with disabilities. Artists like Jeremy
              create pieces for museums, large organizations, and nonprofits.
              New Artists that need some love! Marrie is a longtime artist who
              has cerebral palsy.
            </span>
          </div>
        </div>
        <div className="support">
          <div className="transparent-layer">
            <img src={VerificationIcon} alt="verification-icon" />
            <span className="secondary-text">
              Crypto Heart IRL studio for individuals with disabilities to
              connect & create.
            </span>
          </div>
        </div>
        <div className="support">
          <div className="transparent-layer">
            <img src={VerificationIcon} alt="verification-icon" />
            <span className="secondary-text">
              Rumi — Rumi helps individuals with disabilities live independently
              by connecting them to supportive roommates.
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
