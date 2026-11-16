function Greeting({ user, onLogout }) {
    return (
        <>
            <h2>Hello, {user.name}!</h2>

            <button onClick={onLogout}>Log out</button>
        </>
    )
}

export default Greeting
