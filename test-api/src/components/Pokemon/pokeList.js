import React, { useState } from 'react'

import {  Card } from 'react-bootstrap';

const ItemP = ({name}) => {


return (
<>
console.log({ItemP.name})
<Card> 
        <Card.Img variant="top" src="{img}" />
        <Card.Body>
          <Card.Title>{name} </Card.Title>
          <Card.Text>
          Valor del producto{itemP.name}
          </Card.Text>
          Stock disponible :{name}

        </Card.Body>
</Card>

</>

    )}


export default ItemP