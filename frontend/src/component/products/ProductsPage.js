import {useState, useEffect} from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cart/CartSlice";
import Books from "../Books";
import Search from "./Search";
import axios from 'axios';

function ProductsPage() {

  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();

  const products = [
    {
      book_id: 11,
      cover: "1.png",
      title: "Urban Jungle",
      authors: [{author_id:0, name:"Archi History Publishing"}],
      description: "Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list. Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list.",
      isbn: "1234-56789-10",
      pages: "210",
      publisher: "Archi History Publishing",
      publish_year: 2011,
      genres: [{genre_id:1, name:"Non-Fiction"}]
    },
    {
      book_id: 20,
      cover: "2.png",
      title: "Daily Beauty Tips",
      authors: [{author_id:2, name:"Olivia Wilson"}],
      description: "A mysterious young boy appears on the doorstep of a kindly couple in the middle of a storm. They take him in, not realizing that he is their future king. The boy and his new guardians learn that he has special abilities, but his failure to use those powers as others desire ultimately forces him to leave that village. But on his way into exile, he is joined by new friends Aubrey and Olivia, two children who are transported from New York City into this magical realm, called Triletus. They help their new friend through adventures to search for a new home. The cities of Triletus, under the influence of the villainous fairy called the Whisperer, will resist rule by this prince, the only one who can unite and protect them. Which side will prevail? Children and the young-at-heart of all ages: read on.",
      isbn: "123-45678910",
      pages: "210",
      publisher: "Scholastic",
      publish_year: 2000,
      genres: [{genre_id:2, name:"Health & Beauty"}]
    },
    {
      book_id: 17,
      cover: "3.png",
      title: "Beauty of Nature",
      authors: [{author_id:3, name:"Hae-Won Jeon"}],
      description: "Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list.",
      isbn: "123-45678910",
      pages: "210",
      publisher: "Scholastic",
      publish_year: 2000,
      genres: [
        { genre_id:1, name:"Non-Fiction"},
        {genre_id: 3, name: "Agriculture"},
        {genre_id: 4, name: "Inspirational"}
      ]
    },
    {
      book_id: 10,
      cover: "4.png",
      title: "Journey of Life",
      authors: [{author_id:2, name:"Olivia Wilson"}],
      description: "Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list.",
      isbn: "123-45678910",
      pages: "210",
      publisher: "Scholastic",
      publish_year: 2020,
      genres: [{genre_id:4, name:"Inspirational"}]
    },
    {
      book_id: 9,
      cover: "5.png",
      title: "Simple Recipe",
      authors: [{author_id: 5, name:"Juliana Silva"}],
      description: "Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list.",
      isbn: "123-45678910",
      pages: "210",
      publisher: "Scholastic",
      publish_year: 2009,
      genres: [{genre_id:5, name:"Cooking"}]
    
    },
    {
      book_id: 123,
      cover: "6.png",
      title: "The Walk to the Lake",
      authors: [{author_id:6, name:"Sacha Dubois"}],
      description: "Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list.",
      isbn: "123-45678910",
      pages: "210",
      publisher: "Scholastic",
      publish_year: 2018,
      genres: [{genre_id:5, name:"Fiction"}]
    
    },
    {
      book_id: 130,
      cover: "7.png",
      title: "Reach for the Stars",
      authors: [{author_id:7, name:"Francois Mercer"}],
      description: "Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list.",
      isbn: "123-45678910",
      pages: "210",
      publisher: "Scholastic",
      publish_year: 2001,
      genres: [{genre_id:5, name:"Fiction"}]
    
    },
    {
      book_id: 7,
      cover: "8.png",
      title: "Side Room",
      authors: [{author_id:8, name:"Bartholomew Henderson"}],
      description: "Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list.",
      isbn: "123-45678910",
      pages: "210",
      publisher: "Scholastic",
      publish_year: 2019,
      genres: [
        {genre_id:6, name:"Horror"},
        {genre_id:7, name:"Suspense"}
      ]
    },
    {
      book_id: 67,
      cover: "9.png",
      title: "Silent in the Dark",
      authors: [{author_id:9, name:"Sebastian Bennett"}],
      description: "Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list.",
      isbn: "123-45678910",
      pages: "210",
      publisher: "Scholastic",
      publish_year: 2000,
      genres: [{ genre_id: 6, name: "Horror" }]
    },
    {
      book_id: 13,
      cover: "10.png",
      title: "Spooky House",
      authors: [{author_id:10, name:"Morgan Maxwell"}],
      description: "Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list.",
      isbn: "123-45678910",
      pages: "210",
      publisher: "Scholastic",
      publish_year: 2015,
      genres: [
        { genre_id: 6, name: "Horror" },
        { genre_id: 7, name: "Suspense" }
      ]
    },
    {
      book_id: 0,
      title: "Unknown Book",
      authors: [{author_id:0, name:"Unknown authors"}],
      description: "No description",
      isbn: "1234-56789-10",
      pages: "12345",
      genres: [{genre_id:0, name:"Unknown"}],
      publisher: "Unknown",
      publish_year: 1000,
    }
  ]
  const [sortedList, setSortedList] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  //retrieve products from database
  useEffect(()=>{
  //   axios.get('http:localhost:8080/books').then((res)=>{

  //     const books = flatten(res.data);

  //     //set product list default sorted by title
  //     setSortedList(books.sort((a, b) => b.publish_year - a.publish_year);
  //   })

    let flat = flatten(products);
    flat.sort((a, b) => b.publish_year - a.publish_year);
    setSortedList(flat);
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

    const type = document.getElementById("searchtype").value;
    const request = document.getElementById("searchvalue").value;

    console.log(type);
    console.log(request);

    // axios.get(`http://localhost:8080/booksby${type}?request=${request}`).then((res)=>{

    //   const books = flatten(res.data);
    //   setFilteredProducts(books.sort((a, b) => b.publish_year - a.publish_year);

    // })
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
        setSortedList([...sortedList].sort((a, b) => b.publish_year - a.publish_year));
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
        setSortedList([...sortedList].sort((a, b) => a.publish_year - b.publish_year));
        break;
    }
  }

  return(
    <>
      {search?
          <Search handleSearch={handleSearch}/>
        :
          <h2 className="center navoffset">Current Selection 
            <button type="button" className="iconbtn" onClick={()=>setSearch(true)}><AiOutlineSearch /></button>
          </h2>
      }
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
          return <Books key={book.book_id} book={book} addToCart={() => dispatch(addToCart(book))} />
        })}
      </div>
    </>
  );
}

export default ProductsPage;
