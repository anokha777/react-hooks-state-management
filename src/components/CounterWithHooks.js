import React,{ useState } from 'react';


const useCounter = () => {
    const [ count, setCounter ] = useState(0);
    const incrementCount = () => {
        setCounter(count+ 1);
    }
    const decrementCount = () => {
      setCounter(count- 1);
  }
  return [count,incrementCount,decrementCount];
}

const Counter =()=>{
  const [ count, incrementCount, decrementCount ] = useCounter();
  return (
    <div>
      <div>{count}</div>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  )
}

export default Counter;