import React from "react";
export default props => {
  return (
    <a href={props.link}>
      <button className={props.className}>{props.name}</button>
    </a>
  );
};
