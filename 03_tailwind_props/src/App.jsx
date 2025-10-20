import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    name: 'saurabh',
    role: 'SDE'
  }

  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      {/* <Card channel="chaiaurcode" someObj = {myObj} someArr = {newArr}/> */}
      <Card username="chaiaurcode" btnText="Click"/>
      <Card username="Saurabh" />
      <Card username="Kumar" btnText='Proceed'/>
    </>
  )
}

export default App
