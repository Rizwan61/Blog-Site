// Dashboard.js
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from "axios"
function Navigation() {
  const [category, setCategory] = useState([]);


  useEffect( () => {
    axios.get("http://localhost:4000/user/categories/all").then( (res) => {


      setCategory(res.data);
    })
  }, [])

  return (
  <>
  <Navbar bg="info" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mx-auto gap-4">
            <Nav.Link to="/" as={Link} >Home</Nav.Link>
            {
            category.map( (cat) => {
              return <Nav.Link as={Link} to={`/${cat.name}`}>{cat.name}</Nav.Link>
            })
           }
          </Nav>
        </Container>
      </Navbar>






  </>
  )
}


export default Navigation;
