
import React, { useContext, useState } from 'react';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import DataStore from "../../dataStore/dataStore";
import ProfilePics from './UserAvatars';
import { useNavigate } from 'react-router-dom';

function AccountForm() {

  //CALL THE DATASTORE GLOBAL VARIABLE FROM STORE
  const { user, setUser } = useContext(DataStore);
  const [profilePic, setProfilePic] = useState(user.pic ? user.pic : "user-badge-purple.svg");

  //potential error messages when validating form
  const [errorMessages, setErrorMessages] = useState({});
  const errors = {
    fullname: "please enter your name",
    uname: "invalid username",
    unameused: "username taken",
    email: "invalid email format"
  };

  const navigate = useNavigate();

  //POST AXIOS & EMAIL AND VALIDATION
  function handleSubmit(e) {
    e.preventDefault();

    const regForm = document.getElementById("editaccountform");
    const { profilepic, first_name, last_name, username, password, email } = regForm;
    setErrorMessages({});

    const newInfo = {
      userid: user.user_id,
      pic: (profilepic.value ? profilepic.value : "user-badge-purple.svg"),
      firstname: (first_name.value.trim() ? first_name.value : user.first_name),
      lastname: (last_name.value.trim() ? last_name.value : user.last_name),
      username: (username.value.trim() ? username.value : user.username),
      password: (password.value.trim() ? password.value : user.password),
      email: (email.value.trim() ? email.value : user.email),
    }

    //if username is not ""
    if (username.value) {
      if (username.value !== user.username) {
        //check if username is in database
        axios.get(`http://localhost:8080/userbyid/${username.value}`).then((res) => {

          const existingUser = res.data;

          if (existingUser) {
            //username taken
            setErrorMessages({ name: "unameused", message: errors.unameused });

          } else {
            axios.put(`http://localhost:8080/updateUser/${user.userid}`, newInfo).then((res) => {

              setUser(newInfo);
            });

          }
        });
      } 

    } 

    navigate('/account');
  }

  function renderErrorMessage(name) {
    if (name === errorMessages.name) {
      return (<div className="error">{errorMessages.message}</div>);
    }
  }

  function updatePreview() {
    const picOptions = document.querySelectorAll('input[name="profilepic"]');
    for (const option of picOptions) {
      if (option.checked) {
        setProfilePic(option.value);
        break;
      }
    }
  }

  const renderForm = (

    <Container className="account-page">
      <Form id="editaccountform" onSubmit={handleSubmit}>
        <Row className="justify-content-md-center">
          <Col xs="auto">
            <Form.Group>
              <div className="profile-pic-dropdown">
                <img src={"../../../images/" + profilePic}
                  className="profile-pic" alt="User Avatar" />
                <ProfilePics />
              </div>
            </Form.Group>
            <button type="button" className="previewbtn" onClick={updatePreview}>
              Preview Changes
            </button>
          </Col>

          <Col md={6}>
            <Card className="editform">
              <Card.Header as="h3" bsPrefix='formheading'>
                <span className="formtext" >Edit Account</span>
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-2">
                  <Form.Label>Enter first name: </Form.Label>
                  <Form.Control type="text" name="first" placeholder={user.firstname} />
                  {renderErrorMessage("fullname")}
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label >Enter last name: </Form.Label>
                  <Form.Control type="text" name="last" placeholder={user.lastname} />
                  {renderErrorMessage("fullname")}
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label >Enter username: </Form.Label>
                  <Form.Control type="text" name="username" placeholder={user.username} />
                  {renderErrorMessage("unameused")}
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label >Enter password: </Form.Label>
                  <Form.Control type="password" name="password" placeholder={user.password} />
                  {renderErrorMessage("pass")}
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label >Enter email: </Form.Label>
                  <Form.Control type="email" name="email" placeholder={user.email} />
                </Form.Group>
                <Form.Group>
                  <button className="loginbtn" variant="none" type="submit">
                    Submit
                  </button>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );

  return renderForm;
};

export default AccountForm;