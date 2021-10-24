import React from "react";
import { Switch } from "react-router-dom";
import Rarity from "../rarity/Rarity";
import Roadmap from "../roadmap/Roadmap";
import MyLions from "../myLions/MyLions";
import Pride from "../pride/Pride";
import NotFound from "../notfound/NotFound";
import Page from "./Page";

const Routes = () => {
  return (
    <section>
      <Switch>
        <Page exact path="/rarity" name="Rarity" component={Rarity} />
        <Page exact path="/roadmap" name="Roadmap" component={Roadmap} />
        <Page exact path="/mine" name="My Lions" component={MyLions} />
        <Page exact path="/Pride" name="Pride" component={Pride} />
        <Page name="Not Found" component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
