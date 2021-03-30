import styled from 'styled-components'

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
export const PageHeading = styled.h1`
    color: white;
    position: absolute;
    font-size: 150px;
    font-weight: bold;
    margin-left: 35%;
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
    width: 100%;
    height: 800px;
    background: ${props => props.theme.mode === 'dark'? 'black': 'white'};
    color: ${props => props.theme.mode === 'dark'? 'white': 'black'};
`
export const Strip = styled.div`
    width: 100%;
    height: 70px;
    background: ${props => props.stripcolor};
    color: white;
`