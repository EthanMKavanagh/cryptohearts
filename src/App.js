import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Page from "./components/routing/Page";
import Routes from "./components/routing/Routes";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import ScrollToTop from "./components/scrollToTop";
import { ToastContainer } from "react-toastify";
import { cssTransition } from "react-toastify";

// WEB3
import Web3Modal from "web3modal";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

const Zoom = cssTransition({
  enter: "zoomIn",
  exit: "zoomOut",
  collapse: false,
});

function initWeb3(provider) {
  const web3 = new Web3(provider);

  web3.eth.extend({
    methods: [
      {
        name: "chainId",
        call: "eth_chainId",
        outputFormatter: web3.utils.hexToNumber,
      },
    ],
  });

  return web3;
}

const App = () => {
  const [provider, setProvider] = useState(null);
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [networkId, setNetworkId] = useState(null);
  const [web3, setWeb3] = useState(null);

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: process.env.REACT_INFURA_ID,
      },
    },
  };

  const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions,
  });

  useEffect(() => {
    const findProvider = async () => {
      const provider = await web3Modal.connect();
      const web3 = initWeb3(provider);
      const accounts = await web3.eth.getAccounts();
      const address = accounts[0];
      const networkId = await web3.eth.net.getId();
      const chainId = await web3.eth.chainId();

      setProvider(provider);
      setConnected(true);
      setAddress(address);
      setNetworkId(networkId);
      setChainId(chainId);
      setWeb3(web3);

      await subscribeProvider(provider);
    };

    findProvider();
  });

  const subscribeProvider = async (provider) => {
    if (!provider.on) {
      return;
    }

    provider.on("close", () => resetApp());

    provider.on("accountsChanged", async (accounts) => {
      setAddress(accounts[0]);
    });

    provider.on("chainChanged", async (chainId) => {
      const networkId = await web3.eth.net.getId();
      setChainId(chainId);
      setNetworkId(networkId);
    });

    provider.on("networkChanged", async (networkId) => {
      const chainId = await web3.eth.chainId();
      setChainId(chainId);
      setNetworkId(networkId);
    });
  };

  const resetApp = async () => {
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }

    await web3Modal.clearCachedProvider();

    setProvider(null);
    setConnected(false);
    setAddress(null);
    setChainId(null);
    setNetworkId(null);
  };

  return (
    <Router>
      <div className="navbar-placeholder" />
      <ScrollToTop />
      <Navbar address={address} />
      {/* <Modal /> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        transition={Zoom}
      />
      <Switch>
        <Page exact path="/" component={Home} title="NFT" />
        <Route component={Routes} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
