// Reacts helps in UI Updation.
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)   // counter -> variable | setCounter -> Function which is responsible for updating the variable.


  // let counter  = 5;
  const addvalue = () => {
    // console.log("value added" , counter)
    // counter++;
    if (counter <= 19) {
      setCounter(prevCounter => prevCounter + 1)   // its the way of adding one by one again and again
      setCounter(prevCounter => prevCounter + 1)
    } else {
      console.log("cannot exceed more than 20  #AUTAAT ME");

    }


  }

  const removevalue = () => {
    // console.log('value removed');
    if (counter >= 1) {
      setCounter(counter - 1)
    } else {
      console.log("cannot proceed negative value  #AUTAAT ME");

    }

  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value :{counter}</h2>
      <button onClick={addvalue}>Add Value: {counter}</button> <br />
      <button onClick={removevalue}>Remove Value: {counter}</button>
    </>
  )
}

export default App
