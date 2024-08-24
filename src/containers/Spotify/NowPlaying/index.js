import React  from 'react'
import Dashboard from './Dashboard'

function NowPlaying(props) {
    const strip = props.strip
    return (
       <Dashboard strip = {strip} theme = {props.theme} />
    )
  }

export default NowPlaying