import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import "./ContactUS.scss";
import GetinTouch from "./GetinTouch/GetinTouch";
import Footer from "../../components/Footer/Footer";
import Map from "./Map/Map";
import SendMessage from "./SendMessage/SendMessage";

const ContactUS = () => {
  return (
    <div className="contact-main-div">
      <NavBar />
      <GetinTouch />
      <Map />
      <SendMessage />
      <Footer />
    </div>
  );
};

export default ContactUS;
