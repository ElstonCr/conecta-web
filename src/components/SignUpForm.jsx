import { useState } from 'react'

function SignUpForm({ onSuccess }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        // Fake for now
        onSuccess({ name, email })
    }

    return (
        <form onSubmit={handleSubmit} className="auth-layout">
            <input type="text" placeholder="Name" value={name} 
                onChange={(event) => setName(event.target.value)}/>

            <input type="email" placeholder="Email" value={email}
                onChange={(event) => setEmail(event.target.value)}/>

            <input type="password" placeholder="Password" value={password}
                onChange={(event) => setPassword(event.target.value)}/>

            <button type="submit">Create user</button>
        </form>
    )
}

export default SignUpForm
