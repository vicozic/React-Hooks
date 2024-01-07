import React, {useState, memo} from 'react'

const Count = () => {
    const [state, setState] = useState(0);
    const  handleClick = (x) => {
        setState(pre => pre+x);
    }
    console.log("I am counter");
  return (
    <div>
        <p>{state}</p>
        <button onClick={() => handleClick(5)}>Add</button>
      
    </div>
  )
}

export default memo(Count)