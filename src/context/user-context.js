import React, { useState, useMemo } from 'react'

export const UserContext = React.createContext()


async function restoreSessionWithToken(token, user, setToken, setUser) {
    if (token === null) {
        setToken(localStorage.getItem('authToken'))
    }
    if ((token !== null || token !== false) && user.id === null) {
        let response = await fetch(
            `http://localhost:3001/api/v1/auth/tokenData`,
            {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + token
                }
            }
        )
        if (response.status === 200) {
            let data = await response.json()
            await setToken(token)
            await setUser({
                id: data.id,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email
            })
        }
        else {
            setToken(false)
        }

    }
}


export const UserProvider = (props) => {
    const [user, setUser] = useState({
        id: null,
        firstName: null,
        lastName: null,
        email: null
    })
    const [token, setToken] = useState(null)
    const [reload, setReload] = useState(false)

    const value = useMemo(() => {
        console.log(token, user)
        restoreSessionWithToken(token, user, setToken, setUser)
        return ({ user, setUser, reload, setReload, token, setToken })
    }, [user, reload, token])

    return <UserContext.Provider value={value}{...props} />
}

export function useUser() {
    const context = React.useContext(UserContext)

    if (!context) {
        throw new Error('useUser need to be inside the UserContext')
    }
    return context
}
