import React from "react";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import SearchBar from "./Searchbar";

function SearchBanner() {
  return (
    <>
      <div className="search-banner">
        <div className="container">
          <div className="banner-main">
            <h5>Browse Books By:</h5>
            <ButtonToolbar aria-label="searchtoolbar">
              <ButtonGroup className="me-2" aria-label="genrebutton">
                <Button href="/genres">Genres</Button>
              </ButtonGroup>
              <ButtonGroup className="me-2" aria-label="titlesbutton">
                <Button href="/titles">Titles</Button>
              </ButtonGroup>
              <ButtonGroup className="me-2" aria-label="authorbutton">
                <Button href="/authors">Authors</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
          <hr></hr>
          <div className="browse-container">
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchBanner;