import React, {useEffect, useState, useContext} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { RiPencilLine } from "react-icons/ri";
import axios from "axios";
import DataContext from "../../dataStore/dataStore";
import OrderHistory from "./OrderHistory.js";

const AccountPage = (props) => {
  
    //CALLING IN DATASTORE -> USED FOR NAV BAR CONDITION STATEMENT
    //const { user } = useContext(DataContext);

    const [profile, setProfile] = useState({});
    const [books, setBooks] = useState([]);

    const navigate = useNavigate();
    let params = useParams();

    let username;

    if(props.username){
        username = props.username;
    } else {
        username = params.username;
    }


    // useEffect(() => {
    //     //axios.get(`http://localhost:4000/users/userByName/${username}`)
    //         .then((response) => {

    //             if(response.data){
                
    //                 setProfile(response.data);

    //                 axios.get(`http://localhost:4000/posts/PostByUser/${response.data.userid}`)
    //                     .then((res) => {
    //                         setBooks(res.data);
    //                     })
    //             }
    //         })
    // }, [username]);

    const pageContent = (
        <Container className="account-page">
            <Row className="justify-content-md-center mb-4">
                <Col xs="auto">
                    <img src={"../../../images/" + (profile.pic ? profile.pic : "user-badge-purple.svg")}
                        className="account-pic" alt="User Avatar" />
                </Col>
                <Col md={6}>
                    <Card >
                        <Card.Header bsPrefix='account-heading'>
                            <h1>{profile.firstname} {profile.lastname}</h1>
                            <span className='account-handle'> {profile.username}</span>

                            {profile.userid === profile.userid ? 
                                <button 
                                    type="button" 
                                    className="editbtn" 
                                    onClick={() => navigate('/editAccount')}>
                                    <RiPencilLine />
                                </button> 
                                : ""
                            }

                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <p><b>User type:</b> {profile.accountType}</p>
                            </Row>
                            <Row>
                                <p><b>Contact:</b> {profile.email}</p>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* User Posts */}
            <Row className="justify-content-md-center">
                <Col>
                    <h3 className='text-center'>Books</h3>
                    {books?
                        books.map((book) => {
                        return (
                            <OrderHistory key={book.bookid} profile={profile} book={book} />
                            );
                        })
                    : <p className="text-center">No Books.</p>}
                </Col>
            </Row>
        </Container>

    );

    const noProfile = (<h2 className="text-center">User has been deactivated</h2>);

    return ( 
    <>
        {/* <Header />
        <Navbar /> */}
        {profile ? pageContent : noProfile}
    </>);
};

export default AccountPage;
