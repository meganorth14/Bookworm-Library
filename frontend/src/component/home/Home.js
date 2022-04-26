import React from "react";
import Footer from "../Footer";
import Recommend from "./Recommended";
import Searchbar from "./Searchbar";
import "./home.css";

function Home() {
  return(
    <>
      <Searchbar />
      <Recommend />
      <Footer />
    </>
  );
}

export default Home;
