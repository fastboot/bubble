import React, { PureComponent } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'

const code = new URLSearchParams(window.location.search).get("code")


class NowPlaying extends PureComponent {
    render() {
        return code ? <Dashboard code={code} /> : <Login />
    }
  }

export default (NowPlaying)