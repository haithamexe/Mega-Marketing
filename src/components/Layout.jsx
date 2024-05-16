import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Blob from "./Blob";
import "../styles/layout.css";

const Layout = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  return (
    <div className="layout" onMouseMove={handleMouseMove}>
      <Blob x={x} y={y} handleMouseMove={handleMouseMove} />

      <div className="layout-container">
        <Header />
        <div className="main-content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
