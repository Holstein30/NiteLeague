import React from "react";
import Avatar from "../avatar";
export default props => {
  return (
    <div>
      <Avatar avatar="../../../../public/images/ph2.jpg" />
      <div className="portriat-list-item">{props.name}</div>
      <div className="portriat-list-item">{props.item1}</div>
      <div className="portriat-list-item">{props.item2}</div>
    </div>
  );
};
