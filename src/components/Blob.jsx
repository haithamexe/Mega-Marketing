import "../styles/blob.css";
import { useState } from "react";

const Blob = ({ x, y, handleMouseMove }) => {
  return (
    <div className="back">
      <div
        className="blob"
        style={{ transform: `translate(${x - 300}px, ${y - 300}px)` }}
      ></div>
      <div className="blob-blur"></div>
      <div className="blob-mover" onMouseMove={handleMouseMove}></div>
    </div>
  );
};

export default Blob;
