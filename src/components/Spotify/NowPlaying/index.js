import React  from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import storage from 'local-storage-fallback'

const code = new URLSearchParams(window.location.search).get("code")

function NowPlaying(props) {
    const accessToken = storage.getItem('accessToken')
    const strip = props.strip
    return (
       code? <Dashboard code={code} strip = {strip} /> : <Login />
    )
  }

export default NowPlaying