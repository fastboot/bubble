import React from 'react'
import { NavButtons, NavMenu, Nav, StyledLink, LogoLink } from './NavbarElements'

function Navbar() {

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
                    <h2>buttons</h2>
                </NavButtons>
            </Nav>
        </React.Fragment>
    )
}

export default Navbar