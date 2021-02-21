import React from "react";
// import { Nav } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import ScrollTop from "../../Shared/Scroll/ScrollTop";
import AllNews from "../AllNews/AllNews";
import Header from "../Header/Header";
import Nav from "../Header/Navbar/Nav";
import Navbar from "../Header/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div>    
      <Header />
      <AllNews />
      <Footer />
      <ScrollTop/>
    </div>
  );
};

export default Home;
