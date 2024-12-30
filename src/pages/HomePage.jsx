import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import SearchBox from "../components/common/SearchBox";
import General from "../components/General";
import GeneralAbout from "../components/GeneralAbout";
import Testimonial from "../components/Testimonial";
import Ventures from "../components/Ventures";
import { Helmet } from "react-helmet-async";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>
        Trescorealty – Property Consultant Pune l Real Estate Property Agents in Pune l Tresco Realty l Residential Apartment for Sale in Pune l Commercial Space for sale in Pune l Distress sale in Pune 
        </title>
      </Helmet>
      <Header />
      <SearchBox />
      <General />
      <GeneralAbout />
      <Testimonial />
      <Ventures />
      <Footer />
    </>
  );
}

export default HomePage;
