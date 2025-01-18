import React from "react";
import "./SelectorButton.css";

function SelectorButton({ note }) {
  return (
    <>
      <div className="buttonContain">{note}</div>
    </>
  );
}
export default SelectorButton;
