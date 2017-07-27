import React from "react";

const Item = props => {
  const { name } = props;
  return (
    <div className="box">
      <i className="fa fa-bars" aria-hidden="true" /> - {name}
    </div>
  );
};

export default Item;
