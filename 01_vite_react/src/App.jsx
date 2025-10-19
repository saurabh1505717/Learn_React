import Chai from './chai.jsx'

function App() {
  const username = "Saurabh the dev"

  return (
    <>
      <Chai />
      <p>hi Para this side with {username}</p>
      <h1>I am a H1 tag, present inside a fragment. AS JSX allows exporting only one element. Therefore, we are wrappwed inside a FRAGMENT TAG</h1>
    </>
  )
}
// {username} - this is called as evaluated expression

export default App
