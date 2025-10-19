import { useState } from 'react';
import './App.css'

// How to propagate changes in REACT, to propagate change on UI, we need HOOKS.

function App() {

  let [counter, setCounter] = useState(15);

  // let counter = 15

  const addValue = () => {
    console.log(counter);
    if(counter<20){
      counter++;
      setCounter(counter);
    }
  }

  const subtractValue = () => {
    console.log(counter);
    // counter--;
    // setCounter(counter)

    // OR 

    // setCounter(counter--)
    if(counter>=0){
      setCounter(counter--)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Icrease {counter}</button>
      <br />
      <br />
      <button
        onClick={subtractValue}
      >Decrease {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
