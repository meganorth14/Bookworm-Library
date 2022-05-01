import React, { useState } from "react";
import { Button, Card, Table } from "react-bootstrap";

function ViewUsers() {

  const [users, setUsers] = useState([
    {
      userId: 1,
      username: 'gtownsend',
      email: 'gt@mail.com',
      firstName: 'Gino',
      lastName: 'Townsend',
      role: 'admin',
      registerDate: '12/31/1999',
      lastLogin: '12/31/1999'
    },
    {
      userId: 2,
      username: 'mschweikert',
      email: 'ms@mail.com',
      firstName: 'Madison',
      lastName: 'Schweikert',
      role: 'admin',
      registerDate: '12/31/1999',
      lastLogin: '12/31/1999'
    },
    {
      userId: 3,
      username: 'morth',
      email: 'mo@mail.com',
      firstName: 'Megan',
      lastName: 'Orth',
      role: 'admin',
      registerDate: '12/31/1999',
      lastLogin: '12/31/1999'
    },
    {
      userId: 4,
      username: 'ssholib',
      email: 'ss@mail.com',
      firstName: 'Samuel',
      lastName: 'Sholib',
      role: 'admin',
      registerDate: '12/31/1999',
      lastLogin: '12/31/1999'
    }
  ]);

  const handleDelete = (event) => {
    event.preventDefault();
    
    let temp = users;
    temp = temp.filter(function (value, _index, _arr) {
      return value.userId !== Number(event.target.value);
    });
    setUsers(temp);
  };

  const renderUsers =
    users.map(user => (
      <tr key={user.userId}>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.role}</td>
        <td>{user.registerDate}</td>
        <td>{user.lastLogin}</td>
        <td>
          <Button value={user.userId} onClick={handleDelete}>Delete</Button>
        </td>
      </tr>
    ));

  return (
    <>
      <Card style={{ marginTop: '10px' }}>
        <Card.Body>
          <Card.Title>View All Users</Card.Title>
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
    </>
  );
}

export default ViewUsers;
