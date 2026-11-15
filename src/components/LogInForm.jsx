import { useState } from 'react'

function LogInForm({ onSuccess }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        // Fake for now
        onSuccess({ name: email, email })
    }

    return (
        <form onSubmit={handleSubmit} className="auth-layout">
            <input type="email" placeholder="Email" value={email}
                onChange={(event) => setEmail(event.target.value)}/>

            <input type="password" placeholder="Password" value={password}
                onChange={(event) => setPassword(event.target.value)}/>

            <button type="submit">Log in</button>
        </form>
    )
}

export default LogInForm
