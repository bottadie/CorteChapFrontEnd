import React, { useEffect, useState } from 'react'
import {  Container,Row,Card,Col } from 'react-bootstrap';


import PokemonInfoP from '../Pokemon/pokeCard'



const Form = () => {

  const [formData, setFormData] = useState("")

  const [pokemonInfo, setPokemonInfo,] = useState()


  
  
  const  handleSubmit = (e) => {
    e.preventDefault()
    if (!formData) return;

  async function fetchData() {
    console.log(formData.body)
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${formData.body}`)
    const data = await result.json();
    
setPokemonInfo(data)
console.log(pokemonInfo)

  }
  fetchData()
  }
     
    







  return (
 <>


<Container>
  <Row>
    <Col>
    <div className="text-center" style={{ margin: 5 }}>

    <form onSubmit= {handleSubmit}>
      <h1> Pokedex</h1>{<br/>}
      <label htmlFor="title">ID del pokemon</label>{<br/>}
<textarea onChange= {(e) => setFormData({ body: e.target.value})}  value={formData.body} name="body" id="body"></textarea>{<br/>}{<br/>}
      <input type="submit" value="Submit" />
    </form>
    </div>
    </Col>
    <Col>
{
pokemonInfo && 
<Card style={{ margin: 5 }}>
<div className="text-center" key={pokemonInfo.id}>
<h1>{pokemonInfo.name}</h1>

<h4>
  Altura: {pokemonInfo.height} | Peso: {pokemonInfo.weight}
</h4>

<img alt="pokemon" src={`${pokemonInfo.sprites.front_shiny}`} />


<ul>
{<br/>}
<h2>Habilidades</h2>
{pokemonInfo && pokemonInfo.abilities.map((pokemon,e) => {
  return   <h4> {pokemon.ability.name}</h4>
    
  


})


}

</ul>


</div>
</Card>}
</Col>
 </Row>
 </Container>


     </>
  



  )
}

export default Form