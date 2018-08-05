import React, { Component } from "react";

export default props => {
  return (
    <a href="#">
      <button className={props.className}>{props.name}</button>
    </a>
  );
};
