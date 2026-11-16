import { useState } from 'react'
import Greeting from './components/Greeting.jsx'
import LogInForm from './components/LogInForm.jsx'
import SignUpForm from './components/SignUpForm.jsx'

function App() {
  const [user, setUser] = useState(null)
  const [mode, setMode] = useState("signup")   // "signup" or "login"
  
  return (
    <>
      <h1 className="blue-font">Conecta</h1>

      { user ? (
        <Greeting user={user} onLogout={() => setUser(null)} />
      ) : (
        <>
          {mode === "signup"
            ? <SignUpForm onSuccess={setUser} />
            : <LogInForm onSuccess={setUser} />}

          <button onClick={() => setMode(mode === "signup" ? "login" : "signup")}>
            {mode === "signup" ? "Have an account? Log in" : "New here? Sign up"}
          </button>
        </>
      )}
    </>
  )
}

export default App
