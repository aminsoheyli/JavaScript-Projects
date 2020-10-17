import React from "react";

const Like = (props) => {
  const classes = props.liked ? "fa fa-heart" : "fa fa-heart-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};
export default Like;
