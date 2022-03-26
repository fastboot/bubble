import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100vw;
    align-items: center;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

`
export const Heading = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        // display: none;
    }
`

export const StripLogo = styled.img`
    padding-right: 10px;
    padding-left: 20px;
    width: 45px;
    height: 45px;
    @media (max-width: 768px) {
        width: 20px;
        height: 20px;
    }
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
    // background: green;
    justify-content: center;
    width: 100vw;
    padding: 50px;
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
    // background: blue;
    @media (max-width: 768px) {
        width: 100vw;
        flex-direction: column;

    }
`

export const ProRow = styled.div`
    display: flex;
    width: 100vw;
    height: 35vh;
    margin-bottom: 40px;
    flex-direction: row;
    @media (max-width: 768px) {
        height: 70vh;
        flex-direction: column;
        justify-content: space-between;
    }
`

export const MiddleProRow = styled.div`
    display: flex;
    width: 100%;
    height: 25vh;
    flex-direction: row;
    @media (max-width: 768px) {
        flex-direction: column;
        position: relative;
        padding: 12px;
    }
`

export const MiddleCard = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    border-radius: 10px;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(215deg, ${ props => props.fromcolor } 0%, ${ props => props.tocolor } 100%);
    box-shadow: ${props => props.noShadow === 'true' || props.theme.mode === 'dark' ? null : `-1rem 0 3rem ${ props.tocolor }` };
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 24px;
    }
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
