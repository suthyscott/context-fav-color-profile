import { useState, useContext } from "react"
import axios from 'axios'

const Landing = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [register, setRegister] = useState(false)

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        const body = {username, password}
        axios.post('/register', body)
            .then(res => console.log(res.data))
    }
    return (
        <div>
            {register ? (
                <form onSubmit={e => handleRegisterSubmit(e)}>
                    <input placeholder="Please enter a username" onChange={e => setUsername(e.target.value)}/>
                    <input placeholder="Please enter a password" onChange={e => setPassword(e.target.value)}/>
                    <button>Register your account!</button>
                </form>
            ) : (
                <form onSubmit={e => handleLoginSubmit(e)}>
                    <input placeholder="Please enter your username" onChange={e => setUsername(e.target.value)}/>
                    <input placeholder="Please enter your password" onChange={e => setPassword(e.target.value)}/>
                    <button>Login</button>
                </form>
            )}

            <button onClick={() => setRegister(!register)}>
                Do you want to {register ? "login?" : "register?"}
            </button>
        </div>
    )
}

export default Landing
