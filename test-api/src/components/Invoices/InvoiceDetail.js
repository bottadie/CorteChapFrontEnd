import React from 'react';
import {  Card,Row,Container} from 'react-bootstrap';


const InvoiceDetail = ()=> {

  const order = [{
    "Company": "CORTE",
    "AccountID": 1206,
    "StartDate": "2009-10-31T01:48:52Z",
    "EndDate": "2009-10-31T01:48:52Z",
    "ScheduledDate":"2009-10-31T01:48:52Z",
    "Items": {
      "ArtID": "2112512202440",
      "TotalQuantity": 1000,
      "PendingQuantity": 500,
      "AssignedQuantity": 500,
      "ItemStatus": "Manufacturing pending",
      "UnitofMeasure": "KG"
    },
    "ShippingMethod": "By Customer"
  },
  {
    "Company": "CORTE",
    "AccountID": 1206,
    "StartDate": "2009-13-31T01:48:52Z",
    "EndDate": "2009-13-31T01:48:52Z",
    "ScheduledDate":"2009-13-31T01:48:52Z",
    "Items": {
      "ArtID": "2112512202445",
      "TotalQuantity": 100,
      "PendingQuantity": 30,
      "AssignedQuantity": 20,
      "ItemStatus": "Manufacturing pending",
      "UnitofMeasure": "KG"
    },
    "ShippingMethod": "By Customer"
  }
]



  
return ( 
    <>
    <Container fluid style={{ margin: 10 }}>
    <Row >
    {order && order.map((e) => { 
      return     <Card  className="bg-dark text-white" style={{ width: '18rem',margin: 10 }}>
       
      <Card.Body bg="light-blue">
        <Card.Title>{e.Company}</Card.Title>
        <Card.Subtitle className="mb-2 ">Start Date:{e.StartDate}<br/><br/>End Date: {e.EndDate}</Card.Subtitle>
        <Card.Text>
        Monto: 158000 ars
        Operación: Completada
        </Card.Text>
        <Card.Link href="#">Factura Link</Card.Link>
        <Card.Link href="#">Productos Link</Card.Link>
      </Card.Body>
    </Card>


 })
  }
    </Row>
</Container>
  </>

  )}


export default InvoiceDetail