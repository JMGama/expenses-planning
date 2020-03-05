import React, { useState, useMemo } from 'react'

export const UserContext = React.createContext()

export const UserProvider = (props) => {
    const [user, setUser] = useState({
        id: 1,
        firstName: "Jose Manuel",
        lastName: "Gama Estrada"
    })

    const value = useMemo(() => {
        return ({ user })
    }, [user])

    return <UserContext.Provider value={value}{...props} />
}

export function useUser() {
    const context = React.useContext(UserContext)

    if (!context) {
        throw new Error('useUser need to be inside the UserContext')
    }
    return context
}