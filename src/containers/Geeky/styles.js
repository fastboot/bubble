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
    position: relative;
    height: 300px;
    width: 1200px;
    top: 60px;
    left: calc(10%);
    display: flex;
`

export const EmptyBar = styled.div`
    background-color: #2e3033;
    width: 100%;
    height: 100%;
`
export const FilledBarMacPro = styled.div`
    position: absolute;
    top: 0px;
    z-index: 3;
    width: 0px;
    height: 100%;
    background: rgb(0,154,217);
    background: linear-gradient(90deg, rgba(0,154,217,1) 0%, rgba(217,147,0,1) 65%, rgba(255,186,0,1) 100%);
    transition: 0.6s ease-out;
`

export const FilledBarMacAir = styled.div`
    position: absolute;
    top: 0px;
    z-index: 3;
    width: 0px;
    height: 100%;
    background: rgb(0,154,217);
    background: linear-gradient(90deg, rgba(0,154,217,1) 0%, rgba(217,147,0,1) 65%, rgba(255,186,0,1) 100%);
    transition: 0.6s ease-out;
`

export const FilledBarSamPro = styled.div`
    position: absolute;
    top: 0px;
    z-index: 3;
    width: 0px;
    height: 100%;
    background: rgb(0,154,217);
    background: linear-gradient(90deg, rgba(0,154,217,1) 0%, rgba(217,147,0,1) 65%, rgba(255,186,0,1) 100%);
    transition: 0.6s ease-out;
`

export const FilledBarPixel = styled.div`
    position: absolute;
    top: 0px;
    z-index: 3;
    width: 0px;
    height: 100%;
    background: rgb(0,154,217);
    background: linear-gradient(90deg, rgba(0,154,217,1) 0%, rgba(217,147,0,1) 65%, rgba(255,186,0,1) 100%);
    transition: 0.6s ease-out;
`

export const FilledBarIpod = styled.div`
    position: absolute;
    top: 0px;
    z-index: 3;
    width: 0px;
    height: 100%;
    background: rgb(0,154,217);
    background: linear-gradient(90deg, rgba(0,154,217,1) 0%, rgba(217,147,0,1) 65%, rgba(255,186,0,1) 100%);
    transition: 0.6s ease-out;
`

export const FilledBarPS4 = styled.div`
    position: absolute;
    top: 0px;
    z-index: 3;
    width: 0px;
    height: 100%;
    background: rgb(0,154,217);
    background: linear-gradient(90deg, rgba(0,154,217,1) 0%, rgba(217,147,0,1) 65%, rgba(255,186,0,1) 100%);
    transition: 0.6s ease-out;
`

export const Card = styled.div`
    display: flex;
    height: 280px;
    width: 600px;
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

        &:nth-child(n) {
            margin-left: -50px;
        }

        ${FilledBarMacPro} {
            width: 120px;
            z-index: 1;
            transition: 0.4s ease-out;
        }

        ${FilledBarMacAir} {
            width: 150px;
            z-index: 1;
            transition: 0.4s ease-out;
        }
        ${FilledBarSamPro} {
            width: 60px;
            z-index: 1;
            transition: 0.4s ease-out;
        }
        ${FilledBarPixel} {
            width: 150px;
            z-index: 1;
            transition: 0.4s ease-out;
        }
        ${FilledBarIpod} {
            width: 100px;
            z-index: 1;
            transition: 0.4s ease-out;
        }
        ${FilledBarPS4} {
            width: 30px;
            z-index: 1;
            transition: 0.4s ease-out;
        }
    }
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
    box-shadow: ${props => props.noShadow === 'true' ? null : `-1rem 0 3rem ${ props.tocolor }` };
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

export const Title = styled.div`
    color: white;
    font-weight: 300;
    position: absolute;
    left: 20px;
    top: 35px;
`

export const Bar = styled.div`
    position: absolute;
    top: 100px;
    left: 20px;
    height: 5px;
    width: 150px;
`

export const Gadget = styled.div`
    position: absolute;
    height: 100px;
    width: 100px;
    top: 150px;
    left: calc(50% - 50px);
    border-radius: 50%;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    align-items: center;
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