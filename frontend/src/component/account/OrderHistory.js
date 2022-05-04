import react from 'react';

function RentedBooks({ profile, book }) {

    return (
        <div className="rentedBooksContainer">

            <div className='userInfo'>
                <img src={profile.pic ? "../../../images/" + profile.pic : "../../../images/user-badge-purple.svg"}
                    className="user-badge" alt="user badge" />

                <span>{profile.username}</span>
                <small className="account-label">
                    <i>{profile.accountType}</i>
                </small>
            </div>

            <div className="bookInfo">
                <p>Title: {book.title}</p>
                <p>Author:{book.authorName}</p>
                <p>bookId: {book.bookId}</p>

                <small className="rental-date">
                    <p>Rented on: {new Date(book.rentalDate).toLocaleString("en-US",
                        { dateStyle: "medium", timeStyle: "short", hour12: true })}
                    </p>
                </small>
            </div>
        </div>
    );
}

export default RentedBooks;