import React, { useState } from 'react'
import './One.css' 
import Two from './Two';
const Toggle = () => {
  const [toggle, setToggle] = useState(false) ;
  const handleToggle = () =>{
    setToggle(pre => !pre);
  }
  return (
    <div>
    
    <h1 className= {toggle?'colorOne':'colorTwo'}>Hello I am Toggle</h1>
    {toggle? <Two/>: null}
    <button onClick={handleToggle}>Toggle</button>

    </div>
  )
}

export default Toggle