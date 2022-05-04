import React, { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import Inventory from "./Inventory";
import ViewAuthors from "./ViewAuthors";
import ViewOrders from "./ViewOrders";
import ViewGenres from "./ViewGenres";
import ViewUsers from "./ViewUsers";

function AdminPage() {

  const [key, setKey] = useState('users');
  
  return (
    <>
      <Container style={{ marginTop: '50px' }}>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab eventKey='users' title='Users'>
            <ViewUsers />
          </Tab>
          <Tab eventKey='inventory' title='Inventory'>
            <Inventory />
          </Tab>
          <Tab eventKey='orders' title='Order History'>
            <ViewOrders />
          </Tab>
          <Tab eventKey='authors' title='Authors'>
            <ViewAuthors />
          </Tab>
          <Tab eventKey='genres' title='Genres'>
            <ViewGenres />
          </Tab>
        </Tabs>
      </Container>
    </>
  );

}

export default AdminPage;
