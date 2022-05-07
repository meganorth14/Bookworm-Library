import React from "react";
import Search from "../products/Search";
import { FcSearch } from "react-icons/fc";


function SearchBanner() {
  return (
    <>
      <div className="search-banner">
        <div className="container">
          <div className="banner-main">
            <h2>Welcome to the Bookworm Digital Library!</h2>
          </div>
          <hr></hr>
          <div className="browse-container">
            <Search />
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchBanner;