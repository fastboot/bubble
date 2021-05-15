import styled from 'styled-components'

export const BlockCard = styled.div`
    background-color: ${props => props.color};
    height: 500px;
    overflow: hidden;
    width: 100%;
    margin-bottom: 25px;
    display: block;
    color: black;
    position: relative;
`
export const GradientBlockCard = styled.div`
    // background-color: ${props => props.color};
    background: radial-gradient(ellipse at center, #36383f 0%, #1a1d22 60%, #000 90%);
    height: 500px;
    overflow: hidden;
    width: 100%;
    margin-bottom: 25px;
    display: block;
    color: black;
    position: relative;
`

export const FollowDiv = styled.div`
    margin-top: -300px;
    margin-left: 1000px;
`

export const PageHeading = styled.div`
    width: 100%;
    height: 400px;
    line-height: 350px;
    text-align: center;
    position: block;
    font-size: 120px;
    font-weight: bold;
    background: ${props => props.theme.mode === 'black'? 'white': 'black'}
    color: ${props => props.theme.mode === 'black'? 'black': 'white'};
`

export const GradientAnimated = styled.div`
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
    width: 100%;
    height: 10px;
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
`
export const StripLogo = styled.img`
    padding-right: 10px;
    padding-left: 20px;
    width: 45px;
    height: 45px;
`
export const Heading = styled.div`
    display: flex;
    flex-direction: row;
    height: 70px;
    width: 100%;
    line-height: 10px;
    margin-left: 170px;
    margin-top: 100px;
    padding-left: 450px;
`
export const StyledDiv2X = styled.div`
    align-items: center;
    border: 5px solid ${props => props.theme.mode === 'dark'? 'white': 'black'};
    width: 80vw;
    margin: 30px;
    margin-left: 150px;
    background: ${props => props.theme.mode === 'dark'? 'black': 'white'};
    border-radius: 10px;
    box-shadow: -1rem 0 3rem #000;
    color: ${props => props.theme.mode === 'dark'? 'white': 'black'};
`
export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`
