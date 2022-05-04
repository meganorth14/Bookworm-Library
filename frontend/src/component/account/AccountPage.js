import React, { useEffect, useState, } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { RiPencilLine } from "react-icons/ri";
import DataContext from "../../dataStore/dataStore";
import OrderHistory from "./OrderHistory.js";
import 'bootstrap/dist/css/bootstrap.min.css';

const AccountPage = (props) => {

    const [profile, setProfile] = useState({});
    const [books, setBooks] = useState([]);

    const navigate = useNavigate();
    let params = useParams();

    let username;

    if (props.username) {
        username = props.username;
    } else {
        username = params.username;
    }


    // const pageContent = 
    
    return (
        <Container className="account-page">
            <Row className="justify-content-md-center mb-4">
                {/* <Col xs="auto">
                    <img src={"../../../images/" + (profile.pic ? profile.pic : "user-badge-purple.svg")}
                        className="account-pic" alt="User Avatar" />
                </Col> */}
                <Col md={6}>
                    <Card >
                        <Card.Header bsPrefix='account-heading'>


                            <button
                                type="button"
                                className="editbtn"
                                onClick={() => navigate('/editAccount')}>
                                <RiPencilLine />
                            </button>

                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <p><b>First name:</b> {profile.first_name}</p>
                            </Row>
                            <Row>
                                <p><b>Last name:</b> {profile.last_name}</p>
                            </Row>
                            <Row>
                                <p><b>Username:</b> {profile.username}</p>
                            </Row>
                            <Row>
                                <p><b>Email:</b> {profile.email}</p>
                            </Row>
                            <Row>
                                <p><b>Registration date:</b> {profile.registration_date}</p>
                            </Row>
                            <Row>
                                <p><b>Last login:</b> {profile.last_login}</p>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Row className="justify-content-md-center">
                    <Col>
                        <h3 className='text-center'>Books checked out</h3>
                        {books ?
                            books.map((book) => {
                                return (
                                    <OrderHistory key={books.bookid} profile={profile} books={book} />
                                );
                            })
                            : <p className="text-center">No Books.</p>}
                    </Col>
                </Row>


                <Col md={6}>
                    <Card >
                        <Card.Header bsPrefix='account-heading'>

                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <p><b>Title:</b> {books.title}</p>
                            </Row>
                            <Row>
                                <p><b>Book Id:</b> {books.book_id}</p>
                            </Row>
                            <Row>
                                <p><b>Isbn:</b> {books.isbn13}</p>
                            </Row>
                
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
};

export default AccountPage;