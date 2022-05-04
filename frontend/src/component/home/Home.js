import React from "react";
import Footer from "../Footer";
import Recommend from "./Recommended";
import SearchBanner from "./SearchBanner";

import "./home.css";


function Home() {
  return(
    <>
      <SearchBanner />
      <Recommend />
      <Footer />
    </>
  );
}

export default Home;
