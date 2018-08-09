import React from "react";

export default props => {
  return (
    <div>
      <Avatar />
      <div className={props.first}>testing text</div>
      <div className={props.second}>tseting text</div>
      <div className={props.third}>tseting text</div>
    </div>
  );
};
