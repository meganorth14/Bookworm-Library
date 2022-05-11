import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function AccountForm({ setKey }) {

  const userid = useSelector((state) => state.login.value.userid);

  const [ userData, setUserData ] = useState({});
  const [ form, setForm ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ firstSubmit, setFirstSubmit ] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8080/userbyid/${userid}`).then(res => {
      setUserData(res.data);
      setForm(res.data);
    })
  }, [userid])

  const setField = (field, value) => setForm({ ...form, [field]: value })

  const findFormErrors = () => {
    const { firstName, lastName, password, email } = form;
    const errorsFound = {};

    if(!!!firstName) errorsFound.firstName = 'Required'
    else if(firstName.length>50) errorsFound.firstName='First name too long'

    if(!!!lastName) errorsFound.lastName = 'Required'
    else if(lastName.length>50) errorsFound.lastName='Last name too long'

    if(!!!password) errorsFound.password = 'Required'
    else if(password.length<7 || password.length>50) errorsFound.password='Invalid password length'

    if(!!!email) errorsFound.email = 'Required'
    // eslint-disable-next-line
    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)) errorsFound.email='Invalid email'

    return errorsFound;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!firstSubmit) setFirstSubmit(true)
    setErrors({});

    const formErrors = findFormErrors();
    if(Object.keys(formErrors).length > 0) setErrors(formErrors)
    else {
      const { firstName, lastName, password, email } = form;
      let updatedUser = {
        userid: userData.userid,
        username: userData.username,
        password: password,
        email: email,
        firstName: firstName,
        lastName: lastName,
        roleType: userData.roleType,
        registrationDate: userData.registrationDate,
        lastLogin: userData.lastLogin
      }

      axios.put('http://localhost:8080/updateuser', updatedUser);
      alert('User info updated!');
      setKey('account');
      window.location.reload(false);
    }
  };

  return (
    <Form id="updateForm" className='updateAccount' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          defaultValue={userData.firstName}
          onChange={e => setField('firstName', e.target.value)} />
        <Form.Text>No &gt;50 characters</Form.Text>
        <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          defaultValue={userData.lastName}
          onChange={e => setField('lastName', e.target.value)} />
        <Form.Text>No &gt;50 characters</Form.Text>
        <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          defaultValue={userData.password}
          onChange={e => setField('password', e.target.value)}
          isValid={ form.password && !!!errors.password && firstSubmit }
          isInvalid={ !!errors.password } />
        <Form.Text>7-50 characters</Form.Text>
        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          defaultValue={userData.email}
          onChange={e => setField('email', e.target.value)}
          isValid={ form.email && !!!errors.email && firstSubmit }
          isInvalid={ !!errors.email } />
        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
      </Form.Group>
      <Button className='submitBtn' variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
  );

}

export default AccountForm;
