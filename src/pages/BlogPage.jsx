import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Blogs from "../components/Blogs";
import SearchBox from "../components/common/SearchBox";
import { Helmet } from "react-helmet-async";

function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blogs-Trescorealty</title>
      </Helmet>
      <Header />
      <SearchBox />
      <Blogs />
      <Footer />
    </>
  );
}

export default BlogPage;
