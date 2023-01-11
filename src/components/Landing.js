import {useState, useContext} from 'react'

const Landing = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [register, setRegister] = useState(false)

    console.log(register)
  return (
    <div>
        { register ? (
            <div>
                register
            </div>
        ) : (
            <div>
                login
            </div>
        )}

        <button onClick={() => setRegister(!register)}>
            Do you want to {register ? 'login?' : 'register?'}
        </button>
    </div>
  )
}

export default Landing