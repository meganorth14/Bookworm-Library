import React from "react";
import Footer from "../Footer";
import RecommendedBooks from "./RecommendedBooks";
import SearchBanner from "./SearchBanner";
import ContactUs from "./ContactUs";


function Home() {
  return(
    <>
      <SearchBanner />
      <RecommendedBooks />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;
