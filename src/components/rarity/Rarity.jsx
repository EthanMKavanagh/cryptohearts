import React, { useState, useEffect } from "react";
import Layout from "../../layouts/Layout";
import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";

const Rarity = () => {
  const [selected, setSelected] = useState("head");

  const data = {
    head: {
      items: [
        { name: "head1", common: "11.00%", img: "head1.svg" },
        { name: "head2", common: "11.00%", img: "head2.svg" },
      ],
    },
    body: {
      items: [
        { name: "body1", common: "11.00%", img: "body1.svg" },
        { name: "body2", common: "11.00%", img: "body2.svg" },
      ],
    },
    background: {
      items: [
        { name: "background1", common: "11.00%", img: "background1.svg" },
        { name: "background2", common: "11.00%", img: "background2.svg" },
      ],
    },
    hat: {
      items: [
        { name: "hat1", common: "11.00%", img: "hat1.svg" },
        { name: "hat2", common: "11.00%", img: "hat2.svg" },
      ],
    },
    glasses: {
      items: [
        { name: "glasses1", common: "11.00%", img: "glasses1.svg" },
        { name: "glasses2", common: "11.00%", img: "glasses2.svg" },
      ],
    },
    beard: {
      items: [
        { name: "beard1", common: "11.00%", img: "beard1.svg" },
        { name: "beard2", common: "11.00%", img: "beard2.svg" },
      ],
    },
    necklace: {
      items: [
        { name: "necklace1", common: "11.00%", img: "necklace1.svg" },
        { name: "necklace2", common: "11.00%", img: "necklace2.svg" },
      ],
    },
    other: {
      items: [
        { name: "other1", common: "11.00%", img: "other1.svg" },
        { name: "other2", common: "11.00%", img: "other2.svg" },
      ],
    },
  };

  useEffect(() => {
    new Flicking("#lions-flicking");
  }, []);

  return (
    <Layout>
      <div className="rarity">
        <h2 className="mb-20">Rarity chart</h2>
        <div className="container">
          <div className="rarity-chart">
            <div className="chart-buttons">
              {Object.keys(data).map((lion) => (
                <button
                  onClick={() => setSelected(lion)}
                  className={`button ${
                    selected === lion ? "button--active" : ""
                  }`}
                >
                  {lion}
                </button>
              ))}
            </div>
          </div>
          <div className="slider">
            <div id="lions-flicking" class="flicking-viewport">
              <div class="flicking-camera">
                {data[selected].items.map((lion) => (
                  <div class="panel">
                    <div className="slide-item">
                      <img
                        src={require(`../../assets/lions/${lion.img}`).default}
                        alt={lion.name}
                      />
                    </div>
                    <p>{lion.name}</p>
                    <p>{lion.common}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Rarity;
