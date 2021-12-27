import React, { useEffect, useState } from 'react'
import { NavButtons, NavMenu, Nav, StyledLink, LogoLink, Button, Chip } from './NavbarElements'
import Moon from '../../assets/icons/sun.png'
import Sun from '../../assets/icons/moon.png'
import storage from 'local-storage-fallback';

function Navbar(props) {
    const [type, setType] = useState('');

    useEffect(() => {
        setType(storage.getItem('navType'))
    }, [])

    const changeTheme = () => {
        props.updateTheme((props.currTheme.mode === 'dark' ? { mode: 'light' }: { mode: 'dark' }))
    }

    const setTypeToHome = () => {
        storage.setItem('navType', 'home');
    }

    return (
        <React.Fragment>
            <Nav>
                <LogoLink to = '/' onClick = {setTypeToHome}>
                    <h1> ?¿ </h1>
                </LogoLink>
                <React.Fragment>
                    <NavMenu>
                    <StyledLink to = '/posts' activeStyle={{ color: "red" }} >
                        Posts
                    </StyledLink> 
                    <StyledLink to = '/developer' activeStyle={{ color: "red" }} style={{ marginLeft: '-20px' }} >
                        Developer
                    </StyledLink> 
                    <StyledLink to = '/cp' activeStyle={{ color: "red" }} >
                        Programming
                    </StyledLink> 
                    <StyledLink to = '/spotify' activeStyle={{ color: "red" }} style={{  marginLeft: '35px' }} >
                        Spotify
                    </StyledLink> 
                    <NavButtons>
                        <Button type="image" src = { props.currTheme.mode === 'dark' ? Moon: Sun } onClick = { changeTheme } />
                    </NavButtons>
                    </NavMenu>
                </React.Fragment>
            </Nav>
        </React.Fragment>
    )
}

export default Navbar