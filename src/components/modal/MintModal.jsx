import React from "react";

const MintModal = ({ data }) => {
  const closeModal = (e) => {
    if (e.target.classList[0] === "mint-modal") {
      const modal = document.getElementById("mint-modal-btn");
      modal.checked = false;
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="section">
      <input
        className="mint-modal-btn"
        type="checkbox"
        id="mint-modal-btn"
        name="mint-modal-btn"
      />
      <div onClick={closeModal} className="mint-modal">
        <div className="modal-wrap">
          <h3>{data?.name}</h3>
          <img src={data?.image} alt={data?.name} />

          <label for="mintCount">How many would you like to mint?</label>
          <select id="mintCount" name="mintCount">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MintModal;
