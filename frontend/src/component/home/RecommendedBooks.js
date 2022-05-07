import React, {useState} from "react";
import { DropdownButton, Dropdown, CardGroup } from "react-bootstrap";
import Books from "../Books";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cart/CartSlice";

function RecommendedBooks() {

  const dispatch = useDispatch();

  const bookrecs = [
    {
      bookId: 1,
      cover: "GideonNinth.png",
      title: "Gideon the Ninth",
      authors: "Tamsyn Muir",
      description: "The Emperor needs necromancers. The Ninth Necromancer needs a swordswoman. Gideon has a sword, some dirty magazines, and no more time for undead nonsense. Brought up by unfriendly, ossifying nuns, ancient retainers, and countless skeletons, Gideon is ready to abandon a life of servitude and an afterlife as a reanimated corpse. She packs up her sword, her shoes, and her dirty magazines, and prepares to launch her daring escape. But her childhood nemesis won’t set her free without a service. Harrowhark Nonagesimus, Reverend Daughter of the Ninth House and bone witch extraordinaire, has been summoned into action. The Emperor has invited the heirs to each of his loyal Houses to a deadly trial of wits and skill. If Harrowhark succeeds she will be become an immortal, all-powerful servant of the Resurrection, but no necromancer can ascend without their cavalier. Without Gideon’s sword, Harrow will fail, and the Ninth House will die. Of course, some things are better left dead.",
      isbn13: "978-1250313195",
      pages: "448",
      publisher: "Tardotcom",
      publishYear: 2019,
      genres: "Science Fiction, Fantasy, LGBTQ+"
    }, 
    {
      bookId: 20,
      cover: "2.png",
      title: "Daily Beauty Tips",
      authors: "Olivia Wilson", 
      isbn13: "978-1250313195",
      pages: "448",
      publisher: "Tardotcom",
      publishYear: 2019,
      description: "A mysterious young boy appears on the doorstep of a kindly couple in the middle of a storm. They take him in, not realizing that he is their future king. The boy and his new guardians learn that he has special abilities, but his failure to use those powers as others desire ultimately forces him to leave that village. But on his way into exile, he is joined by new friends Aubrey and Olivia, two children who are transported from New York City into this magical realm, called Triletus. They help their new friend through adventures to search for a new home. The cities of Triletus, under the influence of the villainous fairy called the Whisperer, will resist rule by this prince, the only one who can unite and protect them. Which side will prevail? Children and the young-at-heart of all ages: read on.",
      genres:"Beauty, Health"
    },
    {
      bookId: 11,
      cover: "1.png",
      title: "Urban Jungle",
      authors: "Archi History Publishing",
      description: "Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list. Description of featured item like plot summary or possibly could have a persuasive testimony type thing to reccommend the book. Why you liked it or why it is on the current featured list.",
      isbn13: "123-45678910",
      pages: "210",
      publisher:"Archi History Publishing",
      publishYear:2011,
      genres:"Non-Fiction"
    }
  ]

  return (
    <>
      <div className="recommendations">
        <div className="container">
          <div className="rec-title">
            <h3>Our Current Recommendations:</h3>
          </div>
          <hr></hr>
          <div className="gallery">
            <CardGroup>
              {bookrecs.map((book) => {
                return <Books key={book.bookId} book={book} addToCart={() => dispatch(addToCart(book))} />
              })}
            </CardGroup>
          </div>
        </div>
      </div>
    </>
  );
}
export default RecommendedBooks;