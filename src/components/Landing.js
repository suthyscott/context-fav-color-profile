import { useState, useContext } from "react"
import axios from 'axios'
import AuthContext from "../store/AuthContext"
import { useNavigate } from "react-router-dom"

const Landing = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [register, setRegister] = useState(false)
    const authCtx = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        const body = {username, password}
        axios.post('/login', body)
            .then(({data}) => {
                console.log(data)
                authCtx.login(data.token, data.exp, data.userId)
                navigate('/profile')
            })
            .catch(err => console.log(err))
            
    }

    
    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        const body = {username, password}
        axios.post('/register', body)
            .then(({data}) => {
                console.log(data)
                authCtx.login(data.token, data.exp, data.userId)
            })
            .catch(err => console.log(err))
            
    }
    // console.log(authCtx)
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
