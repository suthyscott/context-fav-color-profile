import {useContext} from 'react'
import ProfileContext from '../store/profileContext'

const Profile = () => {
    const profile = useContext(ProfileContext)
    console.log(profile)
  return (
    <div>Profile</div>
  )
}

export default Profile