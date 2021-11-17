import React, { useState } from "react";
import { mintArr, projectArr } from "./faqsArray";

const Chevron = (props) => (
  <svg
    className={props.className}
    height={props.height}
    width={props.width}
    viewBox="0 0 266 438"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m258.476 235.971-194.344 194.343c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901l154.021-154.746-154.021-154.745c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0l194.343 194.343c9.373 9.372 9.373 24.568.001 33.941z"
      fill={props.fill}
    />
  </svg>
);

const FAQs = () => {
  const [mintActive, setMintActive] = useState(false);
  const [projectActive, setProjectActive] = useState(false);

  const toggleMintAccordion = () => {
    setMintActive(!mintActive);
  };

  const toggleProjectAccordion = () => {
    setProjectActive(!projectActive);
  };

  return (
    <>
      <h1>FAQ's</h1>

      <div className="accordion-section">
        <button
          className={`accordion bottom ${mintActive && "active"}`}
          onClick={toggleMintAccordion}
        >
          <p className="accordion-title">Mint FAQs</p>
          <Chevron
            className={`accordion-icon ${mintActive && "rotate"}`}
            width={10}
            fill={"#ffffff"}
          />
        </button>

        <div className="accordion-content" aria-expanded={!mintActive}>
          {mintArr.map((item) => (
            <div className="accordion-item">
              <div
                className="question-text"
                dangerouslySetInnerHTML={{ __html: item.question }}
              />
              <div
                className="answer-text"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="accordion-section">
        <button
          className={`accordion top ${projectActive && "active"}`}
          onClick={toggleProjectAccordion}
        >
          <p className="accordion-title">Project FAQs</p>
          <Chevron
            className={`accordion-icon ${projectActive && "rotate"}`}
            width={10}
            fill={"#ffffff"}
          />
        </button>

        <div className="accordion-content" aria-expanded={!projectActive}>
          {projectArr.map((item) => (
            <div className="accordion-item">
              <div
                className="question-text"
                dangerouslySetInnerHTML={{ __html: item.question }}
              />
              <div
                className="answer-text"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQs;
