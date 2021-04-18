import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const GradientAnimated = styled.div`
    background: linear-gradient(45deg, #08f7fe, #09fbd3, #fe53bb, #f5d300);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
    width: 100%;
    position: relative;
    height: 400px;
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`

export const CurrentStreamStripWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-left: 12px;
`

export const CurrentStreamHeader = styled.h1`
    color: white;
    font-size: 20px;
    display: flex;
    width: 170px;
    flex-direction: row;
    line-height: 15px;
`
export const CurrentStreamButton = styled.button`
    display: flex;
    width: 100px;
    background: transparent;
    radius: 30%;
    margin-left: -100px;
`

export const PageHeading = styled.h1`
    color: white;
    position: absolute;
    font-size: 150px;
    font-weight: bold;
    margin-top: 100px;
`
export const PageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const StyledDiv = styled.div`
    width: 100%;
    height: 400px;
    background: ${props => props.theme.mode === 'dark'? 'black': 'white'};
    color: ${props => props.theme.mode === 'dark'? 'white': 'black'};
`

export const StyledDiv2X = styled.div`

    width: 80vw;
    margin: 30px;
    margin-left: 150px;
    background: ${props => props.theme.mode === 'dark'? 'black': 'white'};
    color: ${props => props.theme.mode === 'dark'? 'white': 'black'};
`
export const Strip = styled.div`
    width: 60%;
    height: 70px;
    background: ${props => props.stripcolor};
    color: white;
`
export const Triangle = styled.div`
    width: 0; 
    height: 0; 
    margin-top: -12px;
    margin-right: -23px;
    border-top: 35px solid transparent;
    border-bottom: 35px solid transparent;
    border-left: 35px solid #1DB954;
`
export const StyledLink = styled(Link)`
    text-decoration: none;
`
export const StripLogo = styled.img`
    padding-right: 10px;
    padding-left: 20px;
    width: 45px;
    height: 45px;
`