import styled from 'styled-components'

export const GradientAnimated = styled.div`
    background: linear-gradient(45deg, #e92efb, #ff2079, #440bd4, #04005e);
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
    }
`

export const PageHeading = styled.div`
    width: 100%;
    height: 250px;
    text-align: center;
    padding-top: 50px;
    font-size: 120px;
    font-weight: bold;
    background: ${props => props.theme.mode === 'black'? 'white': 'black'}
    color: ${props => props.theme.mode === 'black'? 'black': 'white'};
`
export const PageWrapper = styled.div`
    width: 96.70%;
    height: 100%;
    background: red;
    display: flex;
    flex-direction: column;
`
export const PageRow = styled.div`
    margin-left: 100px;
    margin-right: 100px;
    height: 250px;
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
    height: 280px;
    width: 600px;
    margin: 24px;
    background-color: #17141d;
    border-radius: 10px;
    box-shadow: -1rem 0 3rem #000;
    transition: 0.4s ease-out;
    position: relative;
    left: 0px;

    &:hover {
        transform: translateY(-20px);
        transition: 0.4s ease-out;
        position: relative;
        transition: 0.4s ease-out;
    }
`