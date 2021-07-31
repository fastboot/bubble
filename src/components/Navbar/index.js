import React from 'react'
import { NavButtons, NavMenu, Nav, StyledLink, LogoLink, Button } from './NavbarElements'
import Moon from '../../assets/icons/sun.png'
import Sun from '../../assets/icons/moon.png'

function Navbar(props) {
    const changeTheme = () => {
        props.updateTheme((props.currTheme.mode === 'dark' ? { mode: 'light' }: { mode: 'dark' }))
    }

    return (
        <React.Fragment>
            <Nav>
                <LogoLink to = '/' >
                    <h1> ?¿ </h1>
                </LogoLink>
                <NavMenu>
                    <StyledLink to = '/posts' activeStyle={{ color: "red" }} >
                        Posts
                    </StyledLink> 
                    <StyledLink to = '/geeky' activeStyle={{ color: "red" }} >
                        Geeky
                    </StyledLink> 
                    <StyledLink to = '/social' activeStyle={{ color: "red" }} >
                        Social
                    </StyledLink> 
                    <StyledLink to = '/whoami' activeStyle={{ color: "red" }} >
                        $whoami
                    </StyledLink> 
                </NavMenu>
                <NavButtons>
                    <Button type="image" src = { props.currTheme.mode === 'dark' ? Moon: Sun } onClick = { changeTheme } />
                </NavButtons>
            </Nav>
        </React.Fragment>
    )
}

export default Navbar