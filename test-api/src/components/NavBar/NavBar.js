import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom'


export default function App() {

return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="">Portal CorteChap</Navbar.Brand>
    <Nav className="me-auto">
    <Link to={`/`}> <Nav.Link href="#home">Home</Nav.Link></Link>
      
      <Link to={`/invoices`}> <Nav.Link href="#invoices">Invoices</Nav.Link></Link>
      <Link to={`/orders`}>  <Nav.Link href="#orders">Orders</Nav.Link></Link>
      <Link to={`/formulario`}>  <Nav.Link href="#orders">Formulario</Nav.Link></Link>

    </Nav>
    </Container>
  </Navbar>
  </>

  )}