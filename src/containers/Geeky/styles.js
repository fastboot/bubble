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
    height: 300px;
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
    width: 100vw;
    line-height: 10px;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
`

export const SubHeading = styled.div`
    display: flex;
    flex-direction: row;
    height: 70px;
    width: 100vw;
    line-height: 10px;
    justify-content: center;
    align-items: center;
`
export const StripLogo = styled.img`
    padding-right: 10px;
    padding-left: 20px;
    width: 45px;
    height: 45px;
`

export const PageRow = styled.div`
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 90px;
    height: ${ props => props.height };
    display: flex;
    flex-direction: row;
`

export const ShowcaseDivBorder = styled.div`
    width: 40vw;
    height: 380px;
    margin-left: 700px;
    margin-top: 100px;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 0 10px #000;
`
export const ShowcaseInfoWrapper = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 400px;
    height: 100px;
    margin-left: 50px;
    margin-top: 150px;
`

export const ShowCaseInfoHeading = styled.h1`
    display: flex;
    width: 100%;
    height: 30%;
    color: white;
    font-size: 50px;
`

export const ShowcaseInfoDetail = styled.p`
    display: flex;
    width: 100%;
    height: 100%;
    color: white;
`

export const BetweenDescription = styled.div`
    font-size: 25px;
    text-align: center;
    padding: 24px;
    color: ${ props => props.theme.mode === 'dark' ? 'white': 'black' };
    margin-top: ${props => props.marginTop};
`

export const AchieveCardButton = styled.button`
    width: 100px;
    height: 50px;
    border-radius: 10px;
    margin-top: ${props => props.marginTop};
    margin-left: 190px;
`

export const ProWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 85vh;
    max-height: 540px;
`
export const MiddleProWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 25vh;
    margin-top: -2.5vh;
    margin-bottom: 2vh;
    max-height: 200px;
`

export const ProCard = styled.div`
    display: flex;
    width: 75vw;
`
export const ProRow = styled.div`
    display: flex;
    width: 100%;
    height: 35vh;
    max-height: 270px;
    margin-bottom: 40px;
    flex-direction: row;
`

export const MiddleProRow = styled.div`
    display: flex;
    width: 100%;
    height: 25vh;
    max-height: 200px;
    flex-direction: row;
`

export const MiddleCard = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    width: 100%;
    margin-right: 30px;
    margin-left: 30px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 10px;
    transition: 0.4s ease-out;
    background: linear-gradient(215deg, ${ props => props.fromcolor } 0%, ${ props => props.tocolor } 100%);
    border-radius: 10px;
    box-shadow: ${props => props.noShadow === 'true' || props.theme.mode === 'dark' ? null : `-1rem 0 3rem ${ props.tocolor }` };
`

export const Card = styled.div`
    display: flex;
    color: white;
    width: 100%;
    margin-right: 30px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    margin-left: 30px;
    transition: 0.4s ease-out;
    background: linear-gradient(215deg, ${ props => props.fromcolor } 0%, ${ props => props.tocolor } 100%);
    border-radius: 10px;
    box-shadow: ${props => props.noShadow === 'true' || props.theme.mode === 'dark' ? null : `-1rem 0 3rem ${ props.tocolor }` };
`
export const CardHeading = styled.div`
    font-size: 40px;
    text-align: center;
    color: white;
`