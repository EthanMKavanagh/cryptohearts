import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "../../helpers/contractABI.json";
import { useRecoilState } from "recoil";
import { currentAddressState } from "../../state";

const mintOptions = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
  { label: "7", value: 7 },
  { label: "8", value: 8 },
  { label: "9", value: 9 },
  { label: "10", value: 10 },
];

const LoaderSVG = (wid, color = "#ef640777") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{
      margin: "auto",
      background: "none",
      display: "block",
      shapeRendering: "auto",
    }}
    width={wid}
    height={wid}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <path
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeDasharray="42.76482137044271 42.76482137044271"
      d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
      strokeLinecap="round"
      style={{ transform: "scale(1)", transformOrigin: "50px 50px" }}
    >
      <animate
        attributeName="stroke-dashoffset"
        repeatCount="indefinite"
        dur="1s"
        keyTimes="0;1"
        values="0;256.58892822265625"
      />
    </path>
  </svg>
);

const MintModal = ({ data }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const [address] = useRecoilState(currentAddressState);

  const [mintLoading, setMintLoading] = useState(false);
  const [nftContract, setNftContract] = useState(null);
  const [currentSupply, setCurrentSupply] = useState(null);
  const [maxSupply, setMaxSupply] = useState(null);
  const [message, setMessage] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getContract = async () => {
      const { ethereum } = window;

      if (ethereum && data?.address) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const _nftContract = new ethers.Contract(data.address, abi, signer);

        const currentSupply = await _nftContract.functions.currentSupply();
        const maxSupply = await _nftContract.maxSupply();

        const remainingMints = maxSupply - currentSupply;

        setNftContract(_nftContract);
        setCurrentSupply(remainingMints.toString());
        setMaxSupply(maxSupply.toString());
      }
    };

    getContract();
  }, [data?.address]);

  const closeModal = (e) => {
    if (e.target.classList[0] === "mint-modal") {
      const modal = document.getElementById("mint-modal-btn");
      modal.checked = false;
      document.body.style.overflow = "auto";
    }
  };

  const mintNftHandler = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const ethPrice = 0.05 * mintAmount;
        let nftTxn = await nftContract.mint(mintAmount, {
          value: ethers.utils.parseEther(ethPrice.toString()),
        });

        // Set minting true
        setMintLoading(true);

        await nftTxn.wait();

        // Minting complete
        setMintLoading(false);

        setMessage(
          `Minted, see transaction: https://etherscan.io/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      if (err.code === "INSUFFICIENT_FUNDS") {
        setErr("Insufficient Funds");
      } else {
        setErr(err.code);
      }

      console.log(err.message);
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
        <div className="mint-modal-wrap">
          {mintLoading ? (
            <div className="mint-loading-container">
              {LoaderSVG("20rem")}
              <h2>Minting...</h2>
            </div>
          ) : (
            <>
              <div className="artist-container">
                <h2>{data?.name}</h2>
                <img src={data?.image} alt={data?.name} />
              </div>

              <div className="mint-container">
                <label htmlFor="mintCount" className="mintCount-label">
                  How many would you like to mint?
                </label>
                <h5>
                  Total price: {(mintAmount * 0.05).toString().substring(0, 4)}{" "}
                  ETH
                </h5>

                <div className="radio-container">
                  {mintOptions.map((option) => (
                    <div key={option.label} className="radio">
                      <input
                        checked={option.value === mintAmount}
                        type="radio"
                        id={`mintCount${option.value}`}
                        name="mintCount"
                        value={option.value}
                        onChange={() => setMintAmount(option.value)}
                      />
                      <label htmlFor={`mintCount${option.value}`}>
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>

                {err && <div className="error-text">{err}</div>}
                {message && <div className="success-text">{message}</div>}

                {console.log("address", address, "mintAmount", mintAmount)}
                <button
                  disabled={!mintAmount && !address}
                  className="mint-button"
                  onClick={() => mintNftHandler()}
                >
                  Mint
                  <br />
                  {currentSupply} / {maxSupply} remaining
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MintModal;
