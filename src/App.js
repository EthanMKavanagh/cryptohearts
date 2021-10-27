import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Page from "./components/routing/Page";
import Routes from "./components/routing/Routes";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import ScrollToTop from "./components/scrollToTop";
import { ToastContainer } from "react-toastify";
import { cssTransition } from "react-toastify";

const Zoom = cssTransition({
  enter: "zoomIn",
  exit: "zoomOut",
  collapse: false,
});

const App = () => {
  return (
    <Router>
      <div className="navbar-placeholder" />
      <ScrollToTop />
      <Navbar />
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
