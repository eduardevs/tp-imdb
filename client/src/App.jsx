import './App.css'

import { useState } from 'react'
import { useEffect } from 'react'

import { Form } from './components/Form'

// import axios from 'axios'
function App() {
 const [state, setState] = useState({
    title:"",
    description:"",
    image:""
  })

  useEffect(()=>
  { 
    console.log(state)

 
    
    
    
  },[state]);


  return (
    <div className='container'>
      {state && <>
      <p>{state.description}</p>
      <p>{state.image}</p>
      </>}
      <header>
        <h1>Bienvenue sur IMDB</h1>
      </header>
      <p>{}</p>
      <Form state={state} setState={setState}/>
    </div>
  )
}

export default App
