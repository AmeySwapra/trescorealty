import React from "react";
import Header from "../components/common/Header";
import SearchBox from "../components/common/SearchBox";
import Terms from "../components/Terms";
import Footer from "../components/common/Footer";
import { Helmet } from "react-helmet-async";

function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms And Conditions-Trescorealty</title>
      </Helmet>
      <Header />
      <SearchBox />
      <Terms />
      <Footer />
    </>
  );
}

export default TermsPage;
