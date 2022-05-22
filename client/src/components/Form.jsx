import axios from 'axios'
import { useState } from 'react'

export const Form = ({state, setState}) => {
  
   const handleSubmit = (e) => {
       e.preventDefault();
       console.log('hey')
       
    axios('http://localhost:3456', {
            
      withCredentials: true,
      method: 'post',
      data: new URLSearchParams({
        title: state.title,
        description: state.description,
        image: state.image
      }),
      headers:{
        Authorization: `Bearer qdfqsdfqsfqsq`
      }
    }).then(res => res.data)
   
     
    // console.log(state)
    }

    const handleChange = (e) => {
      const value = e.target.value; 
      setState( prev => ({
        ...prev,
    
        [e.target.name]: value
      }));
          
    }
  
  return (
    <div>
      <h1>Ajouter un film</h1>
      <form onSubmit={handleSubmit} className="form p-3">
        <input type="text" onChange={handleChange} className="form-control mt-3" name="title" placeholder="Titre du film" />
        <input type="text" onChange={handleChange} className="form-control mt-3" name="description" placeholder="Sinopsis" />
        <input type="file" multiple accept='image/*' onChange={handleChange} name="image" className="form-control mt-3"/>

        <button type="submit" className="btn btn-secondary mt-3">submit</button>
      </form>
    </div>
  )
}
