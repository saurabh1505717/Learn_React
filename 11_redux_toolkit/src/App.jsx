import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

// 4 things/steps to learn in reducx toolkit

// ------ store(store.js)
// ------ reducers(todoSlice.js)
// ------ useSelector
// ------ useDispatch --> it uses reducers to change in store

function App() {

  return (
    <>
      <h1>Learn about Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
