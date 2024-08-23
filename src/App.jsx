import React, { useCallback, useState } from "react"
import Button from "./button"
// var count=0,setCount;

function App() {
  // var const=0,setCount;
   const [count,setCount]=useState(0);
   function decrease(){
    setCount(count-1)
   }
   function increase(){
    setCount(count+1);
   }
  return (
    <div>
      <div className="container0"><h1 className="heading">No. of Count</h1></div>
      <div className="container">
      <div className="box">
        <h1 className="current">{count}</h1>
      </div>
     
    </div>
     <div className="container2">
        <Button text="-" onClick={decrease}/>
        <Button text="+" onClick={increase}/>
      </div>
    </div>
    
  )
}

export default App
