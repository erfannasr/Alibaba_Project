import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer  />
    </>
  );
}

export default Layout;
