import styled from 'styled-components'

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

export const StripLogo = styled.img`
    padding-right: 10px;
    padding-left: 20px;
    width: 45px;
    height: 45px;
`

export const BetweenDescription = styled.div`
    font-size: 25px;
    text-align: center;
    padding: 24px;
    color: ${ props => props.theme.mode === 'dark' ? 'white': 'black' };
    margin-top: ${props => props.marginTop};
`

export const ProWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 85vh;
    max-height: 660px;
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
    max-height: 210px;
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
