import React from 'react'
import userContext from '../Context/userContext'
import { useContext } from 'react'

function Profile() {
    const {user} = useContext(userContext)

    if(!user) return <div>Please Login!</div>
    return <div>Welcome, {user.username}</div>
}

export default Profile