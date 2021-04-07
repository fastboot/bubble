import React from 'react'
import Auth from './Auth'

function Dashboard({code}) {
    const accessToken = Auth(code)
    console.log(accessToken);
    return (

        <h1> dash </h1>
    )
}

export default Dashboard