import { useEffect, useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { RiPencilLine } from "react-icons/ri";
import OrderHistory from "./OrderHistory.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataStore from "../../dataStore/dataStore";
import axios from 'axios';
import ProfilePic from '../../component/images/avatar.png';
import { useSelector } from 'react-redux';

const AccountPage = (props) => {
    const userid = useSelector((state)=>state.login.value.userid);

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


        axios.get(`http://localhost:8080/userbyid/${userid}`).then((res) => {
            setProfile(res.data)
        });

        axios.get(`http://localhost:8080/orders/user/${userid}/`).then((res) => {
            setBooks(res.data)
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
                                <p><b>First name:</b> {profile.firstName}</p>
                            </Row>
        
                            <Row>
                                <p><b>Last name:</b> {profile.lastName}</p>
                            </Row>
                            <Row>
                                <p><b>Username:</b> {profile.username}</p>
                            </Row>
                            <Row>
                                <p><b>Email:</b> {profile.email}</p>
                            </Row>
                            <Row>
                                <p><b>Registration date:</b> {profile.registrationDate}</p>
                            </Row>
                            <Row>
                                <p><b>Last login:</b> {profile.lastLogin}</p>
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