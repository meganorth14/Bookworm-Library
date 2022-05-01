import {useState} from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cart/CartSlice";
import Books from "../Books";
import Search from "./Search";

function ProductsPage() {

  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();

  const products = [
    {
      book_id: 11,
      cover: "1.png",
      title: "Urban Jungle",
      author: "Archi History Publishing",
      description: "Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list. Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list.",
      isbn: "1234-56789-10",
      pages: "210",
      publisher:"Archi History Publishing",
      publish_date:2011,
      genre:"Non-Fiction"
    },
    {
      book_id: 20,
      cover: "2.png",
      title: "Daily Beauty Tips",
      author: "Olivia Wilson", 
      description: "A mysterious young boy appears on the doorstep of a kindly couple in the middle of a storm. They take him in, not realizing that he is their future king. The boy and his new guardians learn that he has special abilities, but his failure to use those powers as others desire ultimately forces him to leave that village. But on his way into exile, he is joined by new friends Aubrey and Olivia, two children who are transported from New York City into this magical realm, called Triletus. They help their new friend through adventures to search for a new home. The cities of Triletus, under the influence of the villainous fairy called the Whisperer, will resist rule by this prince, the only one who can unite and protect them. Which side will prevail? Children and the young-at-heart of all ages: read on.",
      genre:"Beauty, Health"
    },
    {
      book_id: 17,
      cover: "3.png",
      title: "Beauty of Nature",
      author: "Hae-Won Jeon",
      description:"Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list.",
      genre:"Non-Fiction, Agriculture, Inspirational"
    },
    {
      book_id: 10,
      cover: "4.png",
      title: "Journey of Life",
      author: "Olivia Wilson",
      description:"Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list."
    },
    {
      book_id: 9,
      cover: "5.png",
      title: "Simple Recipe",
      author: "Juliana Silva",
      description:"Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list."
    },
    {
      book_id: 123,
      cover: "6.png",
      title: "The Walk to the Lake",
      author: "Sacha Dubois",
      description:"Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list."
    },
    {
      book_id: 130,
      cover: "7.png",
      title: "Reach for the Stars",
      author: "Francois Mercer",
      description:"Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list."
    },
    {
      book_id: 7,
      cover: "8.png",
      title: "Side Room",
      author: "Bartholomew Henderson",
      description:"Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list."
    },
    {
      book_id: 67,
      cover: "9.png",
      title: "Silent in the Dark",
      author: "Sebastian Bennett",
      description:"Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list."
    },
    {
      book_id: 13,
      cover: "10.png",
      title: "Spooky House",
      author: "Morgan Maxwell",
      description:"Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list."
    }
  ]

  function handleSearch(){
    const type = document.getElementById("searchtype").value;
    const request = document.getElementById("searchvalue").value;

    console.log(type);
    console.log(request);
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
          <Dropdown.Item eventKey="1">Title</Dropdown.Item>
          <Dropdown.Item eventKey="2">Author</Dropdown.Item>
          <Dropdown.Item eventKey="3">Genre</Dropdown.Item>
          <Dropdown.Item eventKey="4">Publish Date</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="gallery">
        {products.map((book)=>{
          return <Books key={book.book_id} book={book} addToCart={() => dispatch(addToCart(book))} />
        })}
      </div>
    </>
  );
}

export default ProductsPage;
