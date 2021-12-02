import React, { useEffect, useState } from 'react'
import ItemP from '../Pokemon/pokeCard'

import itemP from '../Pokemon/pokeCard'


const Form = () => {

  const [formData, setFormData] = useState({
    title: "",
    body: ""})

    const [pokemonInfo, setPokemonInfo,] = useState({
      name:""
    })


  
  
  const  handleSubmit = (e) => {
        e.preventDefault()
        setFormData({body: e.target[0].value,
        title: e.target[1].value})
        console.log(formData.body)
        console.log("entreAca")
        console.log(formData.body)
      BuscoPokemon()}
   
    async function BuscoPokemon(){
      console.log("Entre asyn")
   const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${formData.body}`).then(response => response.json());
    console.log(result)
   // result.map(res => console.log(res.name));

     console.log(pokemonInfo)
       
     
    }
;






  return (
 <>
    <form onSubmit= {handleSubmit}>
      <h1> Our Form </h1>
      <label htmlFor="title">Title</label>
<input onChange= {(e) => setFormData({title: e.target.value})} value={formData.title} type="text" name="title" id="title" />
<label htmlFor="body">Body</label>
<textarea onChange= {(e) => setFormData({...formData, body: e.target.value})}  value={formData.body} name="body" id="body"></textarea>
      <input type="submit" value="Submit" />
    </form>
    
 
    
    {/* {pokemonInfo.length > 0 ?    
         <div>
                  <ItemP detallesdeitems={pokemonInfo.name}/>
                   
                   </div>
                  
                   :
           "Cargando..."}
     */}
     </>
  



  )
}

export default Form