import React from "react";
import Footer from "../Footer";
import Recommend from "./Recommended";
import Header from "../Header";
import SearchBanner from "./SearchBanner";

import "./home.css";


function Home() {
  return(
    <>
      <Header />
      <SearchBanner />
      <Recommend />
      <Footer />
    </>
  );
}

export default Home;
