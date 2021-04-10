import React  from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import storage from 'local-storage-fallback'

const code = new URLSearchParams(window.location.search).get("code")

function NowPlaying() {
    const accessToken = storage.getItem('accessToken')
    return (
       code || accessToken ? <Dashboard code={code} /> : <Login />
    )
  }

export default NowPlaying