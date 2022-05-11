import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import AddUserForm from "./AddUserForm";
import { dateToString, dateTimeToString } from '../utility/HelperMethods';

function ViewUsers() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/allusers').then(res => {
      let userList = res.data;
      if(!!userList){
        userList.map(u => {
          u.registrationDate = dateToString(u.registrationDate);
          u.lastLogin = dateTimeToString(u.lastLogin);
          return u;
        })
        userList.sort((a,b) => a.userid - b.userid);
      }
      setUsers(userList);
    })
  },[]);

  const handleDelete = (event) => {
    event.preventDefault();

    let temp = users.filter(function (value, _index, _arr) {
      return value.userid !== Number(event.target.value);
    });

    axios.delete(`http://localhost:8080/deleteuser/${Number(event.target.value)}`);
    setUsers(temp);
  };

  const renderUsers = users.map(user => (
    <tr key={user.userid}>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.roleType}</td>
      <td>{user.registrationDate}</td>
      <td>{user.lastLogin}</td>
      <td>
        <Button value={user.userid} onClick={handleDelete}>Delete</Button>
      </td>
    </tr>
  ));

  return (<>
    <AddUserForm users={users}/>
    <Card style={{ marginTop: '10px' }}>
      <Card.Header>Total Users: {users.length}</Card.Header>
      <Card.Body>
        <Card.Title>All Users</Card.Title>
        <Table striped bordered hover responsive >
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>Registration Date</th>
              <th>Last Login</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {renderUsers}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  </>);

}

export default ViewUsers;
