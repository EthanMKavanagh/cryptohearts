import React from "react";
import visual1 from "../../assets/visual1.png";
import visual2 from "../../assets/visual2.png";
import visual3 from "../../assets/visual3.png";

const ArrowIcon = () => (
  <svg
    width="17"
    height="9"
    viewBox="0 0 17 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginLeft: 8 }}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.7384 5.47252H0.430054V3.41086H10.7384V0.318359L16.9234 4.44169L10.7384 8.56502V5.47252Z"
      fill="white"
    />
  </svg>
);

const Store = ({ data }) => {
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
            <span>
              Shop Now <ArrowIcon />
            </span>
          </div>
        </div>

        <div className="image-container right-indent">
          <img src={data.visual3} alt="visual" />
          <div className="image-text">
            <span>Visual Complexity</span>
            <span>
              Shop Now <ArrowIcon />
            </span>
          </div>
        </div>

        <div className="image-container left-indent">
          <img src={data.visual1} alt="visual" />
          <div className="image-text">
            <span>Visual Complexity</span>
            <span>
              Shop Now <ArrowIcon />
            </span>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="left">
        <h2 className="heading">
          Marrie Bottleson <br /> Hi, my name is Marrie <br /> Bottelson.
        </h2>

        <p>
          Marrie Bottleson <br /> Hi, my name is Marrie Bottelson. I’m artist.
          Because my art makes me happy and I want other to look at my art work
          and they feel happy. I also make art to stand up for myself, to feel
          proud and to show the world that it takes a lot of strength for me to
          make art.
        </p>

        <div className="image-container left-indent">
          <img src={visual2} alt="visual" />
          <div className="image-text">
            <span>Visual Complexity</span>
            <span>
              Shop Now <ArrowIcon />
            </span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="image-container left-indent">
          <img src={visual1} alt="visual" />
          <div className="image-text">
            <span>Visual Complexity</span>
            <span>
              Shop Now <ArrowIcon />
            </span>
          </div>
        </div>
        <div className="image-container right-indent">
          <img src={visual3} alt="visual" />
          <div className="image-text">
            <span>Visual Complexity</span>
            <span>
              Shop Now <ArrowIcon />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
