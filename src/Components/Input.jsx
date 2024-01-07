import React, { useRef, useState ,memo} from 'react'
import Count from './Count';

const Input = () => {
  // const inputRef = useRef();
  const handleClick = () => {
    // console.log(inputRef.current.value);
    console.log(text);
  }
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    // setText();
  }
   console.log("I am render");
  return (
    <div>
    <Count/>
    <br/>
        <input type='text' value={text} onChange={handleChange}/>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default memo (Input)