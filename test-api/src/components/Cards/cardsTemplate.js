import React from 'react';
import {  Card } from 'react-bootstrap';


const CustomersHome = ()=> {

return (
    <>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Factura numero 1</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">24/07/2021</Card.Subtitle>
    <Card.Text>
    Monto: 158000 ars
    Operación: Completada 
    </Card.Text>
    <Card.Link href="#">Factura Link</Card.Link>
    <Card.Link href="#">Productos Link</Card.Link>
  </Card.Body>
</Card>

  </>

  )}


export default CustomersHome