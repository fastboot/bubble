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

export const WrapperRev = styled.div`
    width: 100%;
    position: relative;
    right: 0px;
    float: right;
    display: flex;
    margin-right: 0px;
    flex-direction: row;
`

export const StyledDiv = styled.div`
    width: 100%;
    height: 400px;
    background: ${props => props.theme.mode === 'dark'? 'black': 'white'};
    color: ${props => props.theme.mode === 'dark'? 'white': 'black'};
`

export const StyledDiv2X = styled.div`
    width: 80vw;
    height: 450px;
    margin: 30px;
    background: ${props => props.theme.mode === 'dark'? 'black': 'white'};
    color: ${props => props.theme.mode === 'dark'? 'white': 'black'};
    position: relative;
`
export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

export const Heading = styled.div`
    display: flex;
    flex-direction: row;
    height: 70px;
    width: 100%;
    line-height: 10px;
    margin-left: 110px;
    margin-top: 100px;
    padding-left: 500px;
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
    border-top: 35px solid transparent;
    border-bottom: 35px solid transparent;
    border-left: 35px solid #1DB954;
`
export const TriangleRev = styled.div`
    width: 0; 
    height: 0; 
    border-top: 35px solid transparent;
    border-bottom: 35px solid transparent;
    border-right: 35px solid red;
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

export const PageRow = styled.div`
    margin-top: 10px;
    width: 95vw;
    height: 350px;
    display: flex;
    flex-direction: row;
`

export const Title = styled.div`
    color: white;
    font-weight: 300;
    position: absolute;
    left: 20px;
    top: 35px;
`

export const Card = styled.div`
    display: flex;
    height: 380px;
    width: 700px;
    margin: 24px;
    background-color: #17141d;
    border-radius: 10px;
    box-shadow: -1rem 0 3rem #000;
    transition: 0.4s ease-out;
    position: relative;
    left: 0px;
`
export const PicCard = styled.div`
    display: flex;
    height: 380px;
    width: 400px;
    margin: 24px;
    overflow: hidden;
    background-color: #17141d;
    border-radius: 10px;
    box-shadow: -1rem 0 3rem #000;
`