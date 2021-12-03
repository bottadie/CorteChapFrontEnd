import React, { useState } from 'react'

import {  CardColumns,Card } from 'react-bootstrap';

const PokemonInfoP = ({name}) => {
console.log("Estoy en itemP")
console.log(PokemonInfoP.name)

return (
<>

<Card> 
        <Card.Body>
          {name}
        

        </Card.Body>
</Card>

</>

    )}


export default PokemonInfoP