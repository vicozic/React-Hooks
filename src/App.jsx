import Count from './Components/Count'
import Input from './Components/Input'
import Toggle from './Components/Toggle'
import './App.css'
import { useState } from 'react'
const App = () => {
const [check, setCheck] = useState(false);
const handleCheck = () =>{
setCheck(pre => !pre);
}
  return (
    <div className={check? 'dark': 'white'}>
    <input type='checkbox' checked={check} onChange={handleCheck}/> 
    <span className={check? 'text': null}>DarkMode</span>
    <br/>
    <Input/>
    <br/>
    <Toggle/>
    </div>
  )
}

export default App