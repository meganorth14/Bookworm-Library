import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { dateToString, dateTimeToString } from '../utility/HelperMethods';

function AccountPage() {

  const userid = useSelector((state) => state.login.value.userid);

  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/userbyid/${userid}`).then((res) => {
      res.data.registrationDate = dateToString(res.data.registrationDate);
      res.data.lastLogin = dateTimeToString(res.data.lastLogin);
      setProfile(res.data);
    });
  }, [userid]);

  return (
    <Container className="account-page">
      <Row className="justify-content-md-center mb-4">
        <Col md={5}>
          <Card>
            <Card.Header as="h5" bsPrefix="account-header">
              Account Details
            </Card.Header>
            <Card.Body className='userbody'>
              <Card.Text><b>Name:</b> {profile.firstName} {profile.lastName}</Card.Text>
              <Card.Text><b>Username:</b> {profile.username}</Card.Text>
              <Card.Text><b>Email:</b> {profile.email}</Card.Text>
              <Card.Text><b>Registration Date:</b> {profile.registrationDate}</Card.Text>
              <Card.Text><b>Last Login:</b> {profile.lastLogin}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
  
}

export default AccountPage;
