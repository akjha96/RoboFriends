import React, { Fragment } from "react";

const Card = ({ name, email, id }) => {
  return (
    <Fragment>
      <div className="tc bg-light-green dib pa3 ma2 grow bw2 shadow-5">
        <img alt="robo" src={`https://robohash.org/${id}?size=200x200`} />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
