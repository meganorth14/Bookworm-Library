import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { RiPencilLine } from "react-icons/ri";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ProfilePic from '../../component/images/avatar.png';
import { useSelector } from 'react-redux';

const AccountPage = (props) => {
    const userid = useSelector((state) => state.login.value.userid);

    const [profile, setProfile] = useState({});

    useEffect(() => {


        axios.get(`http://localhost:8080/userbyid/${userid}`).then((res) => {
            setProfile(res.data)
            console.log(res.data);
        });


    }, []);
    // const dateToString = (date) => {
    //     date = date.map(dt => dt>10 ? dt:`0${dt}`);
    //     const [year,month,day] =  date;
    //     return `${month}/${day}/${year}`;
    //   }
    //   const dateTimeToString = (dateTime) => {
    //     dateTime = dateTime.map(dt => dt>10 ? dt:`0${dt}`);
    //     let [year,month,day,hour,min,sec] = dateTime;
    //     return `${month}/${day}/${year} ${hour}:${min}:${sec}`;
    //   }  

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
                        <div className='buttonContainer'>
                            <div>
                                <button
                                    className='editbtn'
                                    type="button"
                                    onClick={() => navigate('/editAccount')}>
                                    editAccount<RiPencilLine />
                                </button>
                            </div>

                            <div className='orderButton'>
                                <button
                                    type="button"
                                    onClick={() => navigate('/orderHistory')}>
                                    Order History
                                </button>

                            </div>

                        </div>

                    </Card>
                </Col>

            </Row>
        </Container>

    );
};

export default AccountPage;