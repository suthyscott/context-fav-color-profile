import { createContext, useState } from "react";

const ProfileContext = createContext({
    name: '',
    favColor: '',
    changeName: () => {},
    changeColor: () => {}
})

export const ProfileContextProvider = props => {
    const [favColor, setFavColor] = useState('')
    const [name, setName] = useState('')

    const changeFavColor = newFavColor => {
        setFavColor(newFavColor)
    }

    const changeName = newName => {
        setName(newName)
    }


    let contextValue = {
        favColor,
        name,
        changeName,
        changeFavColor
    }
    return (
        <ProfileContext.Provider value={contextValue}>
            {props.children}
        </ProfileContext.Provider>
    )
}


export default ProfileContext