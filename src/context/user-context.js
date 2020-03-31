import React, { useState, useMemo } from 'react'

export const UserContext = React.createContext()

export const UserProvider = (props) => {
    const [user, setUser] = useState({
        id: null,
        firstName: null,
        lastName: null,
        email: null
    })
    const [reload, setReload] = useState(false)
    const value = useMemo(() => {
        return ({ user, setUser, reload, setReload })
    }, [user, reload])

    return <UserContext.Provider value={value}{...props} />
}

export function useUser() {
    const context = React.useContext(UserContext)

    if (!context) {
        throw new Error('useUser need to be inside the UserContext')
    }
    return context
}
