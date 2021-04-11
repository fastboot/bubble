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
