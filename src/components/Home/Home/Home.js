import React from "react";
// import { Nav } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import AllNews from "../AllNews/AllNews";
import Header from "../Header/Header";
import Nav from "../Header/Nav/Nav";
import Navbar from "../Header/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Nav />
      <Navbar />
      <Header />
      <AllNews />
      <Footer />
    </div>
  );
};

export default Home;
