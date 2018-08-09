import React from "react";
export default props => {
  return (
    <div className="avatarImgContainer">
      <img className="avatarImg" src={props.avatar} />
    </div>
  );
};
