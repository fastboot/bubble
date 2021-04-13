import React  from 'react'
import Login from './Login'
import Dashboard from './Dashboard'

const code = new URLSearchParams(window.location.search).get("code")

function NowPlaying(props) {

    const strip = props.strip
    return (
       code? <Dashboard code={code} strip = {strip} /> : <Login />
    )
  }

export default NowPlaying