import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Blogs from "../components/Blogs";
import SearchBox from "../components/common/SearchBox";

function BlogPage() {
  return (
    <>
      <Header />
      <SearchBox/>
      <Blogs />
      <Footer />
    </>
  );
}

export default BlogPage;
