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

export const PageRow = styled.div`
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 90px;
    height: ${ props => props.height };
    display: flex;
    flex-direction: row;
`

export const AchieveCard = styled.div`
    display: flex;
    height: ${ props => props.height };
    width: ${ props => props.width };
    background: linear-gradient(215deg, ${ props => props.fromcolor } 0%, ${ props => props.tocolor } 100%);
    border-radius: 10px;
    box-shadow: ${props => props.noShadow === 'true' || props.theme.mode === 'dark' ? null : `-1rem 0 3rem ${ props.tocolor }` };
    transition: 0.4s ease-out;
    position: relative;
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};

    &:hover {
        transition: 0.4s ease-out;
        position: relative;
        transition: 0.4s ease-out;
    }
`


export const AchievementWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100%;
    width: 1115px;
    margin-left: 150px;
    margin-right: 150px;
    margin-bottom: 100px;
`

export const AchievementRow = styled.div`
    display: flex;
    flex-direction: row;
    height: ${ props => props.height};
    max-width: 100%;
    margin: 48px;
    margin-bottom: 0px;
    margin-top: 0px;
`
export const AchievementCol = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100%;
    width: ${ props => props.width }; 
`

export const ShowcaseDivBorder = styled.div`
    width: 550px;
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