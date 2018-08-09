import React from "react";

export default props => {
  return (
    <input
      className={props.className}
      type={props.type}
      name={props.name}
      pattern={props.pattern}
      title={props.title}
      placeholder={props.placeholder}
      required={props.required}
    />
  );
};
