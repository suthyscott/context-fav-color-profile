import {useContext} from 'react'
import ProfileContext from '../store/profileContext'

const SetProfile = () => {
    const profile = useContext(ProfileContext)
    console.log(profile)
  return (
    <div>
        <input placeholder='Add your favorite color!' onChange={e => profile.changeFavColor(e.target.value)}/>
    </div>
  )
}

export default SetProfile