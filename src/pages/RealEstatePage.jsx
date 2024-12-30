import React from "react";
import Header from "../components/common/Header";
import SearchBox from "../components/common/SearchBox";
import Footer from "../components/common/Footer";
import RealEstate from "../components/RealEstate";
import { Helmet } from "react-helmet-async";

function RealEstatePage() {
  return (
    <>
      <Helmet>
        <title>Top Real Estate Agents in Pune-Trescorealty</title>
      </Helmet>
      <Header />
      <SearchBox />
      <RealEstate />
      <Footer />
    </>
  );
}

export default RealEstatePage;
