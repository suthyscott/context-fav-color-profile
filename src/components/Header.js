import {useContext} from 'react'
import AuthContext from '../store/AuthContext'

const Header = () => {
    const authCtx = useContext(AuthContext)
  return (
    <div>Header
        <button onClick={() => authCtx.logout()}>Logout</button>
    </div>
  )
}

export default Header