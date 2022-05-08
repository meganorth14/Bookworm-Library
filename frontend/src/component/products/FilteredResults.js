import {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cart/CartSlice";
import Books from "../Books";
import Search from "./Search";
import axios from 'axios';

function FilteredResults() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {type, request} = useParams();

  const [sortedList, setSortedList] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:8080/booksby${type}?request=${request}`).then((res) => {

      const books = flatten(res.data);
      setSortedList(books.sort((a, b) => b.publishYear - a.publishYear));

    })
  },[])

  //flattens the author and genre objects into a string list
  function flatten(books){
    for (let book of books) {
      //create author string instead of array of objects
      let authorStr = toLine(book.authors);
      book.authors = authorStr;

      //create genre string instead of array of objects
      let genreStr = toLine(book.genres);
      book.genres = genreStr;
    }
    return books;
  }

  //takes an array of objects and joins them into a comma-separated string
  function toLine(arr){
    let str = arr[0].name;
    for(let i=1; i < arr.length; i++){
      str += ", " + arr[i].name;
    }
    return str;
  }

  //retrieves search results from database
  function handleSearch(){

    const newtype = document.getElementById("searchtype").value;
    const newrequest = document.getElementById("searchvalue").value;

    console.log(newtype);
    console.log(newrequest);

    navigate(`/results/${newtype}/${newrequest}`);
  }

  //sort functionality
  function sort(type){
    switch (type) {
      case "title":
        setSortedList([...sortedList].sort((a, b) => a.title.localeCompare(b.title)));
        break;
      case "author":
        setSortedList([...sortedList].sort((a, b) => a.authors.localeCompare(b.authors)));
        break;
      case "genre":
        setSortedList([...sortedList].sort((a, b) => a.genres.localeCompare(b.genres)));
        break;
      case "date":
        setSortedList([...sortedList].sort((a, b) => b.publishYear - a.publishYear));
        break;
      case "titledesc":
        setSortedList([...sortedList].sort((a, b) => b.title.localeCompare(a.title)));
        break;
      case "authordesc":
        setSortedList([...sortedList].sort((a, b) => b.authors.localeCompare(a.authors)));
        break;
      case "genredesc":
        setSortedList([...sortedList].sort((a, b) => b.genres.localeCompare(a.genres)));
        break;
      case "datedesc":
        setSortedList([...sortedList].sort((a, b) => a.publishYear - b.publishYear));
        break;
    }
  }

  return(
    <>
      <h2 className="navoffset center">Search</h2>
      <Search handleSearch={handleSearch} />
      <h2>Search Results: ({sortedList.length} results found)</h2>
      <div className="sortfilter">
        <DropdownButton
          key="sort"
          title="Sort By"
          bsPrefix="sortfilterbtn"
        >
          <Dropdown.Item as="button" type="button" onClick={()=>sort("title")}>Title A-Z</Dropdown.Item>
          <Dropdown.Item as="button" type="button" onClick={() => sort("titledesc")}>Title Z-A</Dropdown.Item>
          <Dropdown.Item as="button" type="button" onClick={()=>sort("author")}>Author A-Z</Dropdown.Item>
          <Dropdown.Item as="button" type="button" onClick={() => sort("authordesc")}>Author Z-A</Dropdown.Item>
          <Dropdown.Item as="button" type="button" onClick={()=>sort("genre")}>Genre A-Z</Dropdown.Item>
          <Dropdown.Item as="button" type="button" onClick={() => sort("genredesc")}>Genre Z-A</Dropdown.Item>
          <Dropdown.Item as="button" type="button" onClick={()=>sort("date")}>Publish Date (newest)</Dropdown.Item>
          <Dropdown.Item as="button" type="button" onClick={() => sort("datedesc")}>Publish Date (oldest)</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="gallery">
        {sortedList.map((book)=>{
          return <Books key={book.bookId} book={book} addToCart={() => dispatch(addToCart(book))} />
        })}
      </div>
    </>
  );
}

export default FilteredResults;
