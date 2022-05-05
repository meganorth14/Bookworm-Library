import React, {useState} from "react";
import { DropdownButton, Dropdown, CardGroup } from "react-bootstrap";
import { addToCart } from "../../slices/cart/CartSlice";
import Books from "../Books";

function RecommendedBooks() {

  const bookrecs = [
    {
      book_id: 1,
      cover: "GideonNinth.png",
      title: "Gideon the Ninth",
      author: "Tamsyn Muir",
      description: "The Emperor needs necromancers. The Ninth Necromancer needs a swordswoman. Gideon has a sword, some dirty magazines, and no more time for undead nonsense. Brought up by unfriendly, ossifying nuns, ancient retainers, and countless skeletons, Gideon is ready to abandon a life of servitude and an afterlife as a reanimated corpse. She packs up her sword, her shoes, and her dirty magazines, and prepares to launch her daring escape. But her childhood nemesis won’t set her free without a service. Harrowhark Nonagesimus, Reverend Daughter of the Ninth House and bone witch extraordinaire, has been summoned into action. The Emperor has invited the heirs to each of his loyal Houses to a deadly trial of wits and skill. If Harrowhark succeeds she will be become an immortal, all-powerful servant of the Resurrection, but no necromancer can ascend without their cavalier. Without Gideon’s sword, Harrow will fail, and the Ninth House will die. Of course, some things are better left dead.",
      isbn: "978-1250313195",
      pages: "448",
      publisher: "Tardotcom",
      publish_date: 2019,
      genre: "Science Fiction, Fantasy, LGBTQ+"
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
    }
  ]

  return (
    <>
      <div className="recommendations">
        <div className="container">
          <div className="bannertitle">
            <h3>Our Current Recommendations:</h3>
          </div>
          <hr></hr>
          <div className="gallery">
            <CardGroup>
              {bookrecs.map((book) => {
                return <Books key={book.book_id} book={book} />
              })}
            </CardGroup>
          </div>
        </div>
      </div>
    </>
  );
}
export default RecommendedBooks;