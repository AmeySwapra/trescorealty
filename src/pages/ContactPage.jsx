import React from "react";
import Footer from "../components/common/Footer";
import Contact from "../components/Contact";
import Header from "../components/common/Header";
import SearchBox from "../components/common/SearchBox";
import { Helmet } from "react-helmet-async";

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact-Trescorealty</title>
      </Helmet>
      <Header />
      <SearchBox />
      <Contact />
      <Footer />
    </>
  );
}

export default ContactPage;
