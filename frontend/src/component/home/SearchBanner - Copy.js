import React from "react";
import { Button, ButtonGroup, ButtonToolbar, Nav } from "react-bootstrap";
import { Book } from "react-bootstrap-icons";
import SearchBar from "./Searchbar";

function SearchBanner() {
  return (
    <>
      <div className="search-banner">
        <div className="container">
          <div className="banner-main">
            <div className="container">
              <SearchBar />
            </div>
          </div>
          <hr></hr>
          <div className="browse-container">
            <h5>Browse:</h5>
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
        </div>
      </div>
    </>
  );
}
export default SearchBanner;