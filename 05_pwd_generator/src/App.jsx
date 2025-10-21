import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";

// 1) ------------------- useRef:-------------------
// Purpose: Stores a mutable reference to a DOM element or a value that persists across renders.

// - Doesn’t cause re-render when updated.
// - Can access DOM nodes directly.

// syntax 

// const inputRef = useRef();
// <input ref={inputRef} />

// 2) ---------- useCallback:----------------------

// Purpose: Memoizes a function so that it doesn’t get recreated on every render.

// Useful for performance optimization.

// Works with dependencies — function updates only if dependencies change.

// Example:

// const handleClick = useCallback(() => {
//   console.log("Clicked!");
// }, []);

// 3) --------------- useEffect: ------------------

// Purpose: Runs side-effects in functional components (like fetching data, subscriptions, DOM updates).

// Runs after render.

// Can specify dependencies to control when it runs.

// Cleanup function runs when component unmounts or dependencies change.

// Example:

// useEffect(() => {
//   console.log("Component mounted or updated");
//   return () => console.log("Cleanup on unmount or dependency change");
// }, [dependency]);


// --- useRef → reference (DOM or value)

// --- useCallback → cached function

// --- useEffect → side-effects


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const pwdGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*-_=+[]{}`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current.setSelectionRange(0, 25);
    passwordRef.current.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    pwdGenerator();
  }, [length, charAllowed, numberAllowed, pwdGenerator]);
  
  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Password Generator</h1>

        <div className="input-group">
          <input
            type="text"
            value={password}
            placeholder="Your password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard}>Copy</button>
        </div>

        <div className="options">
          <div className="range">
            <label>Length: {length}</label>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              Numbers
            </label>
            <label>
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
