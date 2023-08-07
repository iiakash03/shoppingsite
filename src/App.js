import React from 'react'
import './App.css';
 

import { Navbar, Container,Button } from 'react-bootstrap';
import Demo from './components/demo';


function App() {


  return (
    <>
    <div>
      <Navbar bg="dark" expand="sm" variant='dark'>
       <Container>
          <Navbar.Brand><h1>The Generics</h1></Navbar.Brand>
          <Button>Cart</Button>
        </Container>
      </Navbar>
      <Demo/>
    </div>
    
    </>
  );
}

export default App;
