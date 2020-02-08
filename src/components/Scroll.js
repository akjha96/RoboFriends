import React, { Fragment } from "react";

const Scroll = props => {
  return (
    <Fragment>
      <div style={{ overflowY: "scroll", border: "1px solid black", height: "477px" }}>{props.children}</div>
    </Fragment>
  );
};

export default Scroll;
