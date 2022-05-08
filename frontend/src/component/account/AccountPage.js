import { useEffect, useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { RiPencilLine } from "react-icons/ri";
import OrderHistory from "./OrderHistory.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataStore from "../../dataStore/dataStore";
import axios from 'axios';
import ProfilePic from '../../component/images/avatar.png'

const AccountPage = (props) => {

    const [profile, setProfile] = useState({});
    const [books, setBooks] = useState([]);

    let params = useParams();

    let id;

    if (props.id) {
        id = props.id;
    } else {
        id = params.id;
    }

    useEffect(() => {


        axios.get(`http://localhost:8080/userbyid/${profile.id}`).then((res) => {
            setProfile(res.data)
        });

        axios.get(`http://localhost:8080/getBookById/${profile.id}`).then((res) => {
            setProfile(res.data)
        });


    }, []);

    let navigate = useNavigate();
    const routeChange = () => {
        let path = "../editAccount/";
        navigate(path);
    }

    return (
        <Container className="account-page">
            <Row className="justify-content-md-center mb-4">
                <Col xs="auto">
                    <img src={ProfilePic}
                        className="account-pic" alt="User Avatar" />
                </Col>
                <Col md={6}>
                    <Card >
                        <Card.Body className='userbody'>
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

                        <button
                                type="button"
                                className="editbtn"
                                onClick={() => navigate('/editAccount')}>
                                editAccount<RiPencilLine />
                            </button>
                    </Card>
                </Col>

                <Row className="booksHeader">
                    <Col>
                        <h3 className='books-list'>Books checked out</h3>
                        {books ?
                            books.map((book) => {
                                return (
                                    <OrderHistory key={books.bookid} profile={profile} books={book} />
                                );
                            })
                            : <p className="text-center">No Books.</p>}
                    </Col>
                </Row>


                <Col className='booksContainer'>
                    <Card >
        
                        <Card.Body >
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