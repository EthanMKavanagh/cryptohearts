import React from "react";

const SearchIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.4214 12.6C10.2925 13.4775 8.87392 14.0001 7.33332 14.0001C3.65143 14.0001 0.666656 11.0153 0.666656 7.33342C0.666656 3.65152 3.65143 0.666748 7.33332 0.666748C11.0152 0.666748 14 3.65152 14 7.33342C14 8.87401 13.4774 10.2925 12.5999 11.4215L17.0892 15.9108C17.4147 16.2363 17.4147 16.7639 17.0892 17.0893C16.7638 17.4148 16.2362 17.4148 15.9107 17.0893L11.4214 12.6ZM12.3333 7.33342C12.3333 10.0948 10.0947 12.3334 7.33332 12.3334C4.5719 12.3334 2.33332 10.0948 2.33332 7.33342C2.33332 4.57199 4.5719 2.33341 7.33332 2.33341C10.0947 2.33341 12.3333 4.57199 12.3333 7.33342Z"
      fill="#777E91"
    />
  </svg>
);

const BellIcon = () => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 15.0233C18 15.5113 17.6043 15.907 17.1163 15.907H0.88372C0.395655 15.907 0 15.5113 0 15.0233C0 14.5352 0.395656 14.1395 0.883721 14.1395H0.9V7.98088C0.9 3.57288 4.527 0 9 0C13.473 0 17.1 3.57288 17.1 7.98088V14.1395H17.1163C17.6043 14.1395 18 14.5352 18 15.0233ZM2.7 14.1395H15.3V7.98088C15.3 4.5494 12.4794 1.76744 9 1.76744C5.5206 1.76744 2.7 4.5494 2.7 7.98088V14.1395ZM6.97604 17.7558C6.73121 17.2608 7.19772 16.7907 7.75 16.7907H10.25C10.8023 16.7907 11.2688 17.2608 11.024 17.7558C10.9155 17.9751 10.7699 18.1773 10.591 18.3529C10.169 18.7672 9.59674 19 9 19C8.40326 19 7.83097 18.7672 7.40901 18.3529C7.23013 18.1773 7.08449 17.9751 6.97604 17.7558Z"
      fill="#777E91"
    />
  </svg>
);

const ConnectWallet = () => {
  return (
    <div className="navbar-buttons">
      {/* <div className="search">
        <input placeholder="Search" type="text" className="white" />
        <SearchIcon />
      </div> */}
      {/* <div className="bell">
        <BellIcon />
        <span className="bell__circle" />
      </div> */}
      <div className="button-group">
        {/* <button className="button">Upload</button> */}
        {/* <button className="button button--light">Connect Wallet</button> */}
        <button className="button">Connect Wallet</button>
      </div>
    </div>
  );
};

export default ConnectWallet;
