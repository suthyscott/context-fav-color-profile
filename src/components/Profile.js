import {useContext} from 'react'
import AuthContext from '../store/AuthContext'

const Profile = () => {
    const authCtx = useContext(AuthContext)
    console.log(authCtx)
  return (
    <div>Profile</div>
  )
}

export default Profile