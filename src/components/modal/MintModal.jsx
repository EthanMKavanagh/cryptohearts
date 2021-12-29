import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "../../helpers/contractABI.json";
import { useRecoilState } from "recoil";
import { currentAddressState, currentLoadingState } from "../../state";

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

const MintModal = ({ data }) => {
  const contractAddress = "0x262CD5D2EF9a5f8B6Fc441fB082fD364632C4481";
  const [mintAmount, setMintAmount] = useState(1);
  const [address] = useRecoilState(currentAddressState);
  const [loading, setLoading] = useRecoilState(currentLoadingState);

  const [nftContract, setNftContract] = useState(null);
  // const [currentSupply, setCurrentSupply] = useState(null);
  // const [maxSupply, setMaxSupply] = useState(null);
  const [message, setMessage] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getContract = async () => {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const _nftContract = new ethers.Contract(contractAddress, abi, signer);

        // const currentSupply = _nftContract.currentSupply();
        // const maxSupply = _nftContract.maxSupply();

        setNftContract(_nftContract);
        // setCurrentSupply(currentSupply);
        // setMaxSupply(maxSupply);
      }
    };

    getContract();
  }, []);

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

        setLoading(true);
        await nftTxn.wait().then(() => {
          setLoading(false);
        });

        setMessage(
          `Minting, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
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
          <div className="artist-container">
            <h2>{data?.name}</h2>
            <img src={data?.image} alt={data?.name} />
          </div>

          <div className="mint-container">
            <label htmlFor="mintCount" className="mintCount-label">
              How many would you like to mint?
            </label>
            <h5>
              Total price: {(mintAmount * 0.05).toString().substring(0, 4)} ETH
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

            <button
              disabled={!mintAmount && !address}
              className="mint-button"
              onClick={() => mintNftHandler()}
            >
              Mint
              <br />
              {/* {currentSupply} / {maxSupply} remaining */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintModal;
