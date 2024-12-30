import React from "react";
import Header from "../components/common/Header";
import Privacy from "../components/Privacy";
import Footer from "../components/common/Footer";
import SearchBox from "../components/common/SearchBox";
import { Helmet } from "react-helmet-async";

function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy-Trescorealty</title>
      </Helmet>
      <Header />
      <SearchBox />
      <Privacy />
      <Footer />
    </>
  );
}

export default PrivacyPage;
