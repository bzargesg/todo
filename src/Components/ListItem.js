import React from "react";

var ListItem = function(props) {
  return (
    <div className="list">
      {props.item}
    </div>
  )
}
export default ListItem;