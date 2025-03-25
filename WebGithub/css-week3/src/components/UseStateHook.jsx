import React,{useState} from 'react'

const UseStateHook = () => {
    // let count = 0;

    const [count, setCount] = useState(0);

    const increment = () =>{

        setCount(count+1)
        // console.log(count);
        // count = count + 1;
        // console.log(count);
    }
    const decrement = () =>{

        setCount(count-1)
    }


  return (
    <div>
        <h1>Count is : {count}</h1>
        <button style={{backgroundColor:"black", color: "yellow", padding: "5px", marginRight:"5px"}} onClick={increment}>Increment</button>
        <button style={{backgroundColor:"black", color: "yellow", padding: "5px"}} onClick={decrement}>decrement</button>
    </div>
  )
}

export default UseStateHook