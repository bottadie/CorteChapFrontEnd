import React, { useState } from 'react'

import {  Card } from 'react-bootstrap';

const ItemP = ({name}) => {


return (
<>

<Card> 
        <Card.Img variant="top" src="{img}" />
        <Card.Body>
          <Card.Title>{name} </Card.Title>
          <Card.Text>
          Valor del producto{name}
          </Card.Text>
          Stock disponible :nada

        </Card.Body>
</Card>

</>

    )}


export default ItemP