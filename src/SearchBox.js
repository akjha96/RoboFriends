import React, { Fragment } from "react";

const SearchBox = () => {
  return (
    <Fragment>
      <div className="pa2">
        <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Search robots" />
      </div>
    </Fragment>
  );
};

export default SearchBox;
