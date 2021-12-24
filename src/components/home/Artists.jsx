import React from "react";
import { currentAddressState } from "../../state";
import { artistsArr } from "./artistsArr";
import { useRecoilState } from "recoil";

const LearnMoreIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 13C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 12.5523 19.4477 13 20 13Z"
      fill="#fff"
    />
    <path
      d="M20 17C20.5523 17 21 16.5523 21 16C21 15.4477 20.5523 15 20 15C19.4477 15 19 15.4477 19 16C19 16.5523 19.4477 17 20 17Z"
      fill="#fff"
    />
    <path
      d="M20 21C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19C19.4477 19 19 19.4477 19 20C19 20.5523 19.4477 21 20 21Z"
      fill="#fff"
    />
    <path
      d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
      fill="#fff"
    />
    <path
      d="M12 21C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21Z"
      fill="#fff"
    />
    <path
      d="M4 21C4.55228 21 5 20.5523 5 20C5 19.4477 4.55228 19 4 19C3.44772 19 3 19.4477 3 20C3 20.5523 3.44772 21 4 21Z"
      fill="#fff"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20 9C18.3431 9 17 7.65685 17 6C17 4.34315 18.3431 3 20 3C21.6569 3 23 4.34315 23 6C23 7.65685 21.6569 9 20 9ZM20 7C19.4477 7 19 6.55228 19 6C19 5.44772 19.4477 5 20 5C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7Z"
      fill="#fff"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13ZM12 11C11.4477 11 11 10.5523 11 10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10C13 10.5523 12.5523 11 12 11Z"
      fill="#fff"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 14C1 15.6569 2.34315 17 4 17C5.65685 17 7 15.6569 7 14C7 12.3431 5.65685 11 4 11C2.34315 11 1 12.3431 1 14ZM3 14C3 14.5523 3.44772 15 4 15C4.55228 15 5 14.5523 5 14C5 13.4477 4.55228 13 4 13C3.44772 13 3 13.4477 3 14Z"
      fill="#fff"
    />
  </svg>
);

const DividerIcon = () => (
  <svg
    width="223"
    height="2"
    viewBox="0 0 223 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.462708"
      y="0.991455"
      width="221.612"
      height="0.955224"
      rx="0.477612"
      fill="#E6E8EC"
    />
  </svg>
);

const Artists = ({ setData }) => {
  const [address] = useRecoilState(currentAddressState);

  const openModal = () => {
    const modal = document.getElementById("modal-btn");
    modal.checked = true;
    document.body.style.overflow = "hidden";
  };

  const openMintModal = (e) => {
    e.stopPropagation();
    const modal = document.getElementById("mint-modal-btn");
    modal.checked = true;
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <h1>
        Meet the Artists:
        <br />
        Season 1
      </h1>
      <div className="artists">
        {artistsArr.map((artist) => (
          <div
            className="artist"
            onClick={() => {
              setData(artist);
              openModal();
            }}
          >
            <img src={artist.image} alt="artist" />
            <p>{artist.name}</p>
            <DividerIcon />
            <div className="learn-more">
              <div className="learn-more__button">
                <p>Learn More</p>
              </div>

              {address && (
                <div
                  className="learn-more__mint"
                  onClick={(e) => {
                    setData(artist);
                    openMintModal(e);
                  }}
                >
                  <div className="mint-button">Mint</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Artists;
