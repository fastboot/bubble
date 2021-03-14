import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavButtons, NavMenu, Nav } from './NavbarElements'

function Navbar() {

    return (
        <React.Fragment>
            <Nav>
                <NavLink to = '/' >
                    <h1> Logo </h1>
                </NavLink>
                <NavMenu>
                    <NavLink to = '/posts' activeStyle>
                        Posts
                    </NavLink> 
                    <NavLink to = '/geeky' activeStyle>
                        Geeky
                    </NavLink> 
                    <NavLink to = '/social' activeStyle>
                        Social
                    </NavLink> 
                    <NavLink to = '/watch&play' activeStyle>
                        Watch & Play
                    </NavLink> 
                </NavMenu>
                <NavButtons>
                    <h2>buttons</h2>
                </NavButtons>
            </Nav>
        </React.Fragment>
    )
}

export default Navbar