// Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import AnimatedCursor from "react-animated-cursor";
const Layout = () => {
  return (
    <div>
      <AnimatedCursor />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
