import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100vw;
    align-items: center;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 90vw;
        margin-left: 15px;
    }

`
export const Heading = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
`

export const StripLogo = styled.img`
    width: 100px;
    height: 100px;
    margin-left: 3vw;
    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`

export const BetweenDescription = styled.div`
    font-size: 3vmin;
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
    width: 75vw;
    padding: 50px;
`

export const MiddleProRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75vw;
    padding-left: 50px;
    padding-right: 50px;
    flex-direction: row;
    @media (max-width: 768px) {
        flex-direction: column;
        position: relative;
    }
`

export const ProRow = styled.div`
    display: flex;
    margin-bottom: 40px;
    flex-direction: row;
    @media (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 0px;
    }
`

export const MiddleCard = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    border-radius: 10px;
    width: 70vw;
    height: 25vh;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(215deg, ${ props => props.fromcolor } 0%, ${ props => props.tocolor } 100%);
    box-shadow: ${props => props.noShadow === 'true' || props.theme.mode === 'dark' ? null : `-1rem 0 3rem ${ props.tocolor }` };
    @media (max-width: 768px) {
        flex-direction: column;
        width: 65vw;

    }
`

export const Card = styled.div`
    display: flex;
    color: white;
    width: 30vw;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 20px;
    margin-right: 15px;
    margin-left: 15px;
    transition: 0.4s ease-out;
    background: linear-gradient(215deg, ${ props => props.fromcolor } 0%, ${ props => props.tocolor } 100%);
    border-radius: 10px;
    box-shadow: ${props => props.noShadow === 'true' || props.theme.mode === 'dark' ? null : `-1rem 0 3rem ${ props.tocolor }` };
    @media (max-width: 768px) {
        width: 50vw;
        margin-bottom: 30px;
    }
`

export const H = styled.h1`
    font-size: 6vmin;
    line-height: 4vh;
    @media (max-width: 768px) {
        font-size: 4vmax;
    }
`

export const Hone = styled.h1`
    font-size: 4vmin;
    @media (max-width: 768px) {
        font-size: 2vmax;
    }
`

export const Pone = styled.p`
    font-size: 2.5vmin;
    @media (max-width: 768px) {
        font-size: 1.5vmax
    }
`
