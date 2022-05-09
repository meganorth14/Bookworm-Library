import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function AccountForm(){
  
const [ userInfo, setUserInfo] = useState();
  const submitForm = (e) => {
    e.preventDefault();

    const userForm = document.getElementById("updateForm");
    let userData = userForm.elements[0].value;

    let UpdatedInfo = {...userInfo, data:userData};

    if(!userData.trim()) {
        alert("Please enter all input fields");
        return;
    }

    axios.post('http://localhost:8080/updateuser', UpdatedInfo);

    setUserInfo({ show: false });
};

function Update(){
    setUserInfo({show:false});
}

// render() {
  return (

    <Form id="updateForm" className='updateAccount'onSubmit={submitForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Enter your password" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button className='submitBtn' variant="primary" type="submit"  onClick={Update}>
        Submit
      </Button>
    </Form>
  );
}
//}

export default AccountForm;