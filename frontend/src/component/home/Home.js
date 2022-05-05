import React from "react";
import Footer from "../Footer";
import RecommendedBooks from "./RecommendedBooks";
import SearchBanner from "./SearchBanner";


function Home() {
  return(
    <>
      <SearchBanner />
      <RecommendedBooks />
      <Footer />
    </>
  );
}

export default Home;
