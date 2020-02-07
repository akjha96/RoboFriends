import React, { Fragment } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

const App = () => {
  return (
    <Fragment>
      <div className="tc">
        <h1>Robo Friends</h1>
        <SearchBox />
        <CardList robots={robots} />
      </div>
    </Fragment>
  );
};

export default App;
