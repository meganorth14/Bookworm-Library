import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import {signin} from '../../slices/login/LoginSlice'
import { FloatingLabel } from 'react-bootstrap';
//import axios from "axios";

function Login({showLogin, setShowLogin, setShowRegister}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //potential error messages when validating form
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const fakeDB = [
    {
      user_id:1,
      username:"morth",
      password:"password",
      first_name:"Megan",
      last_name:"Orth",
      email:"megan@gmail.com",
      role_type:"admin",
      registration_date:"04-22-2022",
      last_login:"04-22-2022"
    },
    {
      user_id: 2,
      username: "lknope",
      password: "parksnrec",
      first_name: "Leslie",
      last_name: "Knope",
      email: "leslie@gmail.com",
      role_type: "user",
      registration_date: "02-12-2020",
      last_login: "04-22-2022"
    }
  ];

  //validates user information upon submit
  async function handleSubmit(e) {

    e.preventDefault();

    const loginForm = document.getElementById("loginform");
    let { username, password } = loginForm.elements;

    //check that username is not only whitespace
    if (!username.value.trim()) {

      setErrorMessages({ name: "uname", message: errors.uname });

    } else {

      //check if username is in database
      //const { data } = await axios.get(`http://localhost:4000/users/userByName/${username.value}`);
      const data = fakeDB.find((user) => user.username === username.value);

      if (data) {

        //username in system - check if passwords match
        if (data.password === password.value) {
          setShowLogin(false);

          dispatch(signin(data));
          setErrorMessages({});

        } else {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        }
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    }
  }

  function forgotPassword(){
    setShowLogin(false);
    navigate('/');
  }

  function renderErrorMessage(name) {
    if (name === errorMessages.name) {
      return (<div className="error">{errorMessages.message}</div>);
    }
  }

  //change which modal is showing on button click
  function changeForm() {
    setShowLogin(false);
    setShowRegister(true);
  }

  function handleClose(){
    setShowLogin(false);
    setErrorMessages({});
  }

  const renderForm = (
    <Modal
      show={showLogin}
      onHide={handleClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form id="loginform" className='loginform' onSubmit={handleSubmit}>
        <div className="formbuttons">
          <button className="selectedbutton" disabled>
            Sign In
          </button>
          <button className="unselectedbutton" onClick={changeForm}>
            Sign Up
          </button>
        </div>
        <Modal.Header closeButton>
          <img
            alt="Bookworm Library Logo"
            src="./bookworm_logo.svg"
            width="30"
          />{' '}
          <h3>Login:</h3>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="logininput">
            <FloatingLabel controlId='floatingInput' label="Username" className='floatinglabel'>
              <Form.Control
                type='text'
                name='username'
                placeholder='Username..'
                required
                className='formcontrol'
              />
              {renderErrorMessage("uname")}
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="logininput">
            <FloatingLabel controlId='floatingPassword' label="Password" className='floatinglabel'>
              <Form.Control
                type='passwprd'
                name='password'
                placeholder='Password..'
                required
                className='formcontrol'
              />
              {renderErrorMessage("pass")}
            </FloatingLabel>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <button type="button" className="removebtn" onClick={forgotPassword}>Forgot Password?</button>
          <button className="resetbtn" variant="none" type="reset" onClick={() => setErrorMessages({})}>
            Clear
          </button>
          <button className="loginbtn" variant="none" type="submit">
            Submit
          </button>
        </Modal.Footer>
      </Form>
    </Modal>
  );

  return renderForm;

}

export default Login;