import React, { useState } from 'react';
//import axios from "axios";
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

function Register({ showRegister, setShowRegister, setShowLogin }) {

  //potential error messages when validating form
  const [errorMessages, setErrorMessages] = useState({});
  const errors = {
    fullname: "please enter your name",
    uname: "invalid username",
    unameused: "username taken",
    email: "invalid email format"
  };

  const fakeDB = [
    {
      user_id: 1,
      username: "morth",
      password: "password",
      first_name: "Megan",
      last_name: "Orth",
      email: "megan@gmail.com",
      role_id: 1,
      registration_date: "04-22-2022",
      last_login: "04-22-2022"
    },
    {
      user_id: 2,
      username: "lknope",
      password: "parksnrec",
      first_name: "Leslie",
      last_name: "Knope",
      email: "leslie@gmail.com",
      role_id: 2,
      registration_date: "02-12-2020",
      last_login: "04-22-2022"
    }
  ];

  //POST AXIOS & EMAIL AND VALIDATION
  function handleSubmit(e) {
    e.preventDefault();

    const regForm = document.getElementById("regform");
    const { first, last, username, password, email} = regForm;

    const emailFormat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //check that username is not only whitespace
    if (!username.value.trim()) {

      setErrorMessages({ name: "uname", message: errors.uname });

    } else if (!email.value.trim() || !email.value.match(emailFormat)) {

      setErrorMessages({ name: "email", message: errors.email });


    } else {

      //check if username is in database
     // axios.get(`http://localhost:4000/users/userByName/${username.value}`)
     // .then((res) => {

     //   const existingUser = res.data;

        const existingUser = fakeDB.find((user) => user.username === username.value);
        if (existingUser) {
          //username in system - check if returning user
          if (existingUser.password === password.value) {

            setShowRegister(false);

            //PASS DATA RECIEVED FROM AXIOS CALL TO SETUSER
            //setUser(existingUser);

            setErrorMessages({});

          } else {
            //username taken
            setErrorMessages({ name: "unameused", message: errors.unameused });

          }
        } else {
          // new user
          const newUser = {
            userid: null,
            firstname: first.value,
            lastname: last.value,
            username: username.value,
            password: password.value,
            email: email.value
          }
          //axios.post(`http://localhost:4000/users/newUser`, newUser)
          //.then((res) => {

            setShowRegister(false);
            //newUser.userid = res.data.userid;
            //setUser(newUser);
            //localStorage.setItem("user", JSON.stringify(newUser));
            console.log(newUser);
            setErrorMessages({});
          //});
        }
     // })
    }
  }

  function renderErrorMessage(name) {
    if (name === errorMessages.name) {
      return (<div className="error">{errorMessages.message}</div>);
    }
  }

  //change which modal is showing on button click
  function changeForm() {
    setShowLogin(true);
    setShowRegister(false);
  }

  function handleClose(){
    setShowRegister(false);
  }

  const renderForm = (
    <Modal
      show={showRegister}
      onHide={handleClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form id="regform" onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <h3>Sign Up</h3>
          <div className="formbuttons">
            <button className="unselectedbutton" onClick={changeForm}>
              Sign In
            </button>
            <button className="selectedbutton" disabled>
              Sign Up
            </button>
          </div>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-2">
            <Form.Label>Enter first name: </Form.Label>
            <Form.Control type="text" name="first" placeholder="first name" required />
            {renderErrorMessage("fullname")}
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Enter last name: </Form.Label>
            <Form.Control type="text" name="last" placeholder="last name" required />
            {renderErrorMessage("fullname")}
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Enter username: </Form.Label>
            <Form.Control type="text" name="username" placeholder="username" required />
            {renderErrorMessage("unameused")}
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Enter password: </Form.Label>
            <Form.Control type="password" name="password" placeholder="password" required />
            {renderErrorMessage("pass")}
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label bsPrefix="form-dark">Enter email: </Form.Label>
            <Form.Control bsPrefix="form-control form-dark" type="email" name="email" placeholder="email" required />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <button className="loginbtn" variant="none" type="submit">
            Submit
          </button>
        </Modal.Footer>
      </Form>
    </Modal>
  );

  return renderForm;
};

export default Register;