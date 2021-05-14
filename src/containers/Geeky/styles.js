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
    height: 400px;
    text-align: center;
    padding-top: 50px;
    font-size: 120px;
    font-weight: bold;
    background: ${props => props.theme.mode === 'black'? 'white': 'black'}
    color: ${props => props.theme.mode === 'black'? 'black': 'white'};
`
export const StyledDiv = styled.div`
    width: 100%;
    height: 400px;
    background: ${props => props.theme.mode === 'dark'? 'black': 'white'};
    color: ${props => props.theme.mode === 'dark'? 'white': 'black'};
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
    padding-left: 450px;
`
export const StripLogo = styled.img`
    padding-right: 10px;
    padding-left: 20px;
    width: 45px;
    height: 45px;
`
export const GadgetDiv = styled.div`
    width: 200px;
    height: 200px;
`
export const GadgetIpod = styled.img`
    width: 100px;
    height: 120px;
`
export const GadgetPixel = styled.img`
    padding: 24px;
    width: 100px;
    height: 120px;
`
export const GadgetPS4 = styled.img`
    padding: 24px;
    width: 230px;
    height: 150px;
`
export const GadgetWrapper = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
`

export const GadgetRow = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
`
export const Backpack = styled.div`
    display: flex;
    flex-direction: column;
`