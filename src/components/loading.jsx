import React from "react";
import LoadingIcon from "../assets/loading.svg";

const Loading = ({ text }) => {
  return (
    <span className="loading">
      <img alt="loading" src={LoadingIcon} />
      {text && <span>{text}</span>}
    </span>
  );
};

export default Loading;
