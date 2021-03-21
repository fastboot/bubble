import React from 'react'
import { NavButtons, NavMenu, Nav, StyledLink, LogoLink } from './NavbarElements'

function Navbar(props) {

    const changeTheme = () => {
        props.updateTheme((props.currTheme.mode === 'dark' ? { mode: 'light' }: { mode: 'dark' }))
    }

    return (
        <React.Fragment>
            <Nav>
                <LogoLink to = '/' >
                    <h1> Logo </h1>
                </LogoLink>
                <NavMenu>
                    <StyledLink to = '/posts' activeStyle>
                        Posts
                    </StyledLink> 
                    <StyledLink to = '/geeky' activeStyle>
                        Geeky
                    </StyledLink> 
                    <StyledLink to = '/social' activeStyle>
                        Social
                    </StyledLink> 
                    <StyledLink to = '/watch&play' activeStyle>
                        Watch & Play
                    </StyledLink> 
                </NavMenu>
                <NavButtons>
                    <button onClick = { changeTheme }>ToggleMode</button>
                </NavButtons>
            </Nav>
        </React.Fragment>
    )
}

export default Navbar