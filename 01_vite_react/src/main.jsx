import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
// import App from './App.jsx'

function MyApp (){
  return (
    <div>
      <h1>Hey Broooo!!!</h1>
    </div>
  )
}

// This will not work as we have not written any custom render code for this, and React has its own render function where the expected type of object is not like this, in our custom_React, we had a custom render code

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

// instead we can do something like 

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

// if we want to inject variable in the below reactElement, then we can do it like, 
const anotherUser = 'The developer: Saurabh'

// let's create it using REACT 

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click to visit google',
  anotherUser // evaluated expression
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <MyApp/>

    // anotherElement

    // reactElement

    <App />
)
